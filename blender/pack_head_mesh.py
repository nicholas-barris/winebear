"""Pack the original full head for the browser without changing its topology.

Run with ordinary Python 3; only standard-library modules are required:
    python3 blender/pack_head_mesh.py [public/assets]

Inputs remain untouched. Outputs are head-mesh-packed.json and
head-mesh-packed.bin.gz. GPU vertices have a 14-byte stride: position u16x3,
normal i8x3, one pad byte, and UV u16x2. Position attributes must be decoded as
positionOffset + normalizedPosition * positionScale. Normalize
the quantized normal in the shader. UVs are checked, never silently wrapped.
"""
import argparse
import array
import gzip
import hashlib
import json
import math
from pathlib import Path
import struct
import sys


def require(condition, message):
    if not condition:
        raise ValueError(message)


def pack(asset_dir):
    input_meta_path = asset_dir / 'head-mesh.json'
    input_meta_bytes = input_meta_path.read_bytes()
    metadata = json.loads(input_meta_bytes)
    input_binary_path = asset_dir / metadata['binary']
    raw = input_binary_path.read_bytes()
    vertex_count, index_count = metadata['vertexCount'], metadata['indexCount']
    stride = metadata['vertexStride']
    vertex_offset = metadata.get('vertexByteOffset', 0)
    index_offset = metadata['indexByteOffset']
    require(vertex_count > 0 and index_count > 0 and index_count % 3 == 0,
            'Expected a nonempty triangulated source mesh.')
    require(vertex_offset >= 0 and stride >= 32 and vertex_offset + vertex_count*stride <= len(raw),
            'Source vertex range exceeds its binary file.')
    attributes = metadata['attributes']
    for name, size in (('position', 3), ('normal', 3), ('uv', 2)):
        attribute = attributes[name]
        require(attribute['type'] == 'FLOAT' and attribute['size'] == size,
                f'Expected FLOAT{size} source {name}.')
        require(0 <= attribute['offset'] <= stride - size*4,
                f'Source {name} exceeds its vertex stride.')
    index_format = {'UNSIGNED_INT': 'I', 'UNSIGNED_SHORT': 'H'}.get(metadata['indexType'])
    require(index_format is not None, 'Only u16/u32 source indices are supported.')
    index_size = struct.calcsize('<' + index_format)
    require(index_offset >= vertex_offset + vertex_count*stride
            and index_offset + index_count*index_size <= len(raw),
            'Source index range overlaps or exceeds the vertex data.')
    source_indices = memoryview(raw)[index_offset:index_offset+index_count*index_size]
    maximum_index = -1
    for (value,) in struct.iter_unpack('<' + index_format, source_indices):
        require(value < vertex_count, f'Index {value} exceeds vertex count {vertex_count}.')
        maximum_index = max(maximum_index, value)
    for part in metadata.get('parts', []):
        require(part['firstIndex'] >= 0 and part['indexCount'] % 3 == 0
                and part['firstIndex'] + part['indexCount'] <= index_count,
                f'Invalid material part index range: {part.get("name", "unnamed")}.')

    position_struct, normal_struct, uv_struct = struct.Struct('<3f'), struct.Struct('<3f'), struct.Struct('<2f')

    def read_vertex(number):
        start = vertex_offset + number*stride
        position = position_struct.unpack_from(raw, start + attributes['position']['offset'])
        normal = normal_struct.unpack_from(raw, start + attributes['normal']['offset'])
        uv = uv_struct.unpack_from(raw, start + attributes['uv']['offset'])
        return position, normal, uv

    minimum, maximum = [math.inf]*3, [-math.inf]*3
    uv_minimum, uv_maximum = [math.inf]*2, [-math.inf]*2
    for number in range(vertex_count):
        position, normal, uv = read_vertex(number)
        require(all(math.isfinite(value) for value in position+normal+uv),
                f'Non-finite component at vertex {number}.')
        require(math.hypot(*normal) > 1e-8, f'Zero-length normal at vertex {number}.')
        for axis in range(3):
            minimum[axis] = min(minimum[axis], position[axis])
            maximum[axis] = max(maximum[axis], position[axis])
        for axis in range(2):
            uv_minimum[axis] = min(uv_minimum[axis], uv[axis])
            uv_maximum[axis] = max(uv_maximum[axis], uv[axis])
    require(all(lo >= 0 and hi <= 1 for lo, hi in zip(uv_minimum, uv_maximum)),
            f'Source UVs extend outside [0,1]: min={uv_minimum}, max={uv_maximum}. '
            'Packing stopped to preserve the original texture wrapping.')

    scale = [hi-lo for lo, hi in zip(minimum, maximum)]
    output_stride = 14
    output_index_format = 'H' if maximum_index <= 65535 else 'I'
    output_index_size = struct.calcsize('<' + output_index_format)
    vertex_bytes = vertex_count*output_stride
    output_index_offset = (vertex_bytes + output_index_size-1)//output_index_size*output_index_size
    packed = bytearray(output_index_offset + index_count*output_index_size)
    vertex_struct = struct.Struct('<3H3bx2H')
    max_position_error = 0
    max_position_axis_error = [0, 0, 0]
    max_normal_angle = 0
    max_uv_axis_error = [0, 0]
    for number in range(vertex_count):
        position, normal, uv = read_vertex(number)
        quantized_position = [round((position[i]-minimum[i])/scale[i]*65535) if scale[i] else 0
                              for i in range(3)]
        normal_length = math.hypot(*normal)
        unit_normal = [value/normal_length for value in normal]
        quantized_normal = [max(-127, min(127, round(value*127))) for value in unit_normal]
        quantized_uv = [round(value*65535) for value in uv]
        vertex_struct.pack_into(packed, number*output_stride,
                                *quantized_position, *quantized_normal, *quantized_uv)

        position_errors = [abs(minimum[i]+quantized_position[i]/65535*scale[i]-position[i])
                           for i in range(3)]
        max_position_error = max(max_position_error, math.hypot(*position_errors))
        for axis in range(3):
            max_position_axis_error[axis] = max(max_position_axis_error[axis], position_errors[axis])
        decoded_normal_length = math.hypot(*quantized_normal)
        normal_dot = sum(unit_normal[i]*quantized_normal[i]/decoded_normal_length for i in range(3))
        max_normal_angle = max(max_normal_angle, math.degrees(math.acos(max(-1, min(1, normal_dot)))))
        for axis in range(2):
            max_uv_axis_error[axis] = max(max_uv_axis_error[axis], abs(quantized_uv[axis]/65535-uv[axis]))

    output_indices = array.array(output_index_format,
        (value for (value,) in struct.iter_unpack('<' + index_format, source_indices)))
    if sys.byteorder != 'little':
        output_indices.byteswap()
    packed[output_index_offset:] = output_indices.tobytes()
    require(len(packed) == output_index_offset + index_count*output_index_size,
            'Packed binary length does not match its layout.')
    # Verify every index is unchanged, including material-part ordering.
    decoded_indices = struct.iter_unpack('<' + output_index_format, memoryview(packed)[output_index_offset:])
    require(all(a == b for a, b in zip(struct.iter_unpack('<' + index_format, source_indices), decoded_indices)),
            'Packing changed a triangle index.')

    compressed = bytearray(gzip.compress(bytes(packed), compresslevel=9, mtime=0))
    compressed[9] = 255  # platform-independent "unknown OS" header byte
    compressed = bytes(compressed)
    require(gzip.decompress(compressed) == packed, 'Gzip round-trip verification failed.')
    output = dict(metadata)
    output.update({
        'version': 2,
        'binary': 'head-mesh-packed.bin.gz',
        'compression': 'gzip',
        'vertexStride': output_stride,
        'vertexByteOffset': 0,
        'indexByteOffset': output_index_offset,
        'indexType': 'UNSIGNED_SHORT' if output_index_format == 'H' else 'UNSIGNED_INT',
        'attributes': {
            'position': {'offset': 0, 'size': 3, 'type': 'UNSIGNED_SHORT', 'normalized': True},
            'normal': {'offset': 6, 'size': 3, 'type': 'BYTE', 'normalized': True},
            'uv': {'offset': 10, 'size': 2, 'type': 'UNSIGNED_SHORT', 'normalized': True},
        },
        'positionOffset': minimum,
        'positionScale': scale,
        'decoder': {'position': 'positionOffset + normalizedPosition * positionScale',
                    'normalRenormalize': True, 'uvWrapUnchanged': True},
        'uncompressedByteLength': len(packed),
        'compressedByteLength': len(compressed),
        'packing': {
            'generator': 'blender/pack_head_mesh.py',
            'sourceMetadataSha256': hashlib.sha256(input_meta_bytes).hexdigest(),
            'sourceBinarySha256': hashlib.sha256(raw).hexdigest(),
            'packedBinarySha256': hashlib.sha256(packed).hexdigest(),
            'gzipSha256': hashlib.sha256(compressed).hexdigest(),
            'sourceByteLength': len(raw), 'topologyUnchanged': True,
            'maximumIndex': maximum_index,
            'maxPositionError': max_position_error,
            'maxPositionAxisError': max_position_axis_error,
            'maxNormalAngleDegrees': max_normal_angle,
            'uvMinimum': uv_minimum, 'uvMaximum': uv_maximum,
            'maxUvAxisError': max_uv_axis_error,
            'gzipRoundTripVerified': True, 'gzipMtime': 0,
        },
    })
    for filename, content in (
        ('head-mesh-packed.bin.gz', compressed),
        ('head-mesh-packed.json', (json.dumps(output, separators=(',', ':'))+'\n').encode('utf8')),
    ):
        destination = asset_dir / filename
        temporary = destination.with_suffix(destination.suffix+'.tmp')
        temporary.write_bytes(content)
        temporary.replace(destination)
    print(json.dumps({'ready': str(asset_dir/'head-mesh-packed.json'),
        'vertices': vertex_count, 'triangles': index_count//3, 'rawBytes': len(raw),
        'packedBytes': len(packed), 'gzipBytes': len(compressed),
        'maxPositionError': max_position_error, 'maxNormalAngleDegrees': max_normal_angle,
        'maxUvAxisError': max_uv_axis_error}, indent=2))


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('asset_directory', nargs='?', type=Path,
                        default=Path(__file__).resolve().parent.parent/'public'/'assets')
    args = parser.parse_args()
    pack(args.asset_directory)
