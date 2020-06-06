import * as bytes from "./bytes"
import {DataSize, DataType} from "@/types";
import {assertIntBytesLength} from "@/asserts";

// Conversion error
class ConvertError extends Error {
    name = "Convert"
}

export function convertSByte(value: number) {
    return bytes.fromInt(value, DataSize.Byte, true)
}

export function parseSByte(data: Uint8Array) {
    assertIntBytesLength(data, DataSize.Byte)
    return bytes.toInt(data, true)
}

export function convertByte(value: number) {
    return bytes.fromInt(value, DataSize.Byte, false)
}

export function parseByte(data: Uint8Array) {
    assertIntBytesLength(data, DataSize.Byte)
    return bytes.toInt(data, false)
}

export function convertInt16(value: number, littleEndian = false) {
    return bytes.fromInt(value, DataSize.Word, true, littleEndian)
}

export function parseInt16(data: Uint8Array, littleEndian = false) {
    assertIntBytesLength(data, DataSize.Word)
    return bytes.toInt(data, true, littleEndian)
}

export function convertUInt16(value: number, littleEndian = false) {
    return bytes.fromInt(value, DataSize.Word, false, littleEndian)
}

export function parseUInt16(data: Uint8Array, littleEndian = false) {
    assertIntBytesLength(data, DataSize.Word)
    return bytes.toInt(data, false, littleEndian)
}

export function convertInt32(value: number, littleEndian = false) {
    return bytes.fromInt(value, DataSize.DWord, true, littleEndian)
}

export function parseInt32(data: Uint8Array, littleEndian = false) {
    assertIntBytesLength(data, DataSize.DWord)
    return bytes.toInt(data, true, littleEndian)
}

export function convertUInt32(value: number, littleEndian = false) {
    return bytes.fromInt(value, DataSize.DWord, false, littleEndian)
}

export function parseUInt32(data: Uint8Array, littleEndian = false) {
    assertIntBytesLength(data, DataSize.DWord)
    return bytes.toInt(data, false, littleEndian)
}

export function convertBool(value: boolean) {
    return bytes.fromInt(value ? 1 : 0, DataSize.Byte, false)
}

export function parseBool(data: Uint8Array) {
    assertIntBytesLength(data, DataSize.Byte)
    return bytes.toInt(data, false, false) > 0
}

export function convertString(value: string) {
    const data = new TextEncoder().encode(value)
    const buff = new Uint8Array(data.length + 1)
    buff.set(data)
    buff.set([0], data.length)
    return buff
}

export function parseString(data: Uint8Array, encoding = "utf-8") {
    for (let i = 0; i < data.length; i++) {
        if (data[i] === 0) {
            const str = data.slice(0, i)
            return new TextDecoder(encoding).decode(str)
        }
    }
    throw new ConvertError(`endless string without \\0 at the end of the bytes array`)
}

export function convertShortString(value: string) {
    const data = new TextEncoder().encode(value)
    if (data.length > 255)
        throw new ConvertError(`too long for short string, expected less 256, got: ${data.length}`)
    const buff = new Uint8Array(data.length + 1)
    buff[0] = data.length
    buff.set(data, 1)
    return buff
}

export function parseShortString(data: Uint8Array, encoding = "utf-8") {
    if (data.length === 0)
        throw new ConvertError(`empty bytes array, it isn't correct string format even empty string`)
    const length = data[0]
    return new TextDecoder(encoding).decode(data.slice(1, length + 1))
}


// // Converts any data array to bytes array
// export function convertSequence(type: DataType | string, value: Array<any>, littleEndian = false) {
//     let buffer = new Uint8Array(0)
//     value.forEach(val => {
//         const data = convert(type, val, littleEndian)
//         const newbuf = new Uint8Array(buffer.length + data.length)
//         newbuf.set(buffer)
//         newbuf.set(data, buffer.length)
//         buffer = newbuf
//     })
//     return buffer
// }
