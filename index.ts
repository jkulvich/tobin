import * as bytes from "@/bytes"
import {assertIntBytesLength} from "@/checks";

export default class ToBin {

    // Casts unsigned byte to Uint8Array
    static byte(num: number, littleEndian = false) {
        return bytes.fromInt(num, 1, false, littleEndian)
    }

    // Casts bytes to unsigned byte
    static fromByte(data: Uint8Array, littleEndian = false) {
        assertIntBytesLength(data, 1)
        return bytes.toInt(data, false, littleEndian)
    }

    // Casts signed byte to Uint8Array
    static sbyte(num: number, littleEndian = false) {
        return bytes.fromInt(num, 1, true, littleEndian)
    }

    // Casts bytes to signed byte
    static fromSByte(data: Uint8Array, littleEndian = false) {
        assertIntBytesLength(data, 1)
        return bytes.toInt(data, true, littleEndian)
    }

    // Casts signed int16 to Uint8Array
    static int16(num: number, littleEndian = false) {
        return bytes.fromInt(num, 2, true, littleEndian)
    }

    // Casts bytes to signed int16
    static fromInt16(data: Uint8Array, littleEndian = false) {
        assertIntBytesLength(data, 2)
        return bytes.toInt(data, true, littleEndian)
    }

    // Casts unsigned int16 to Uint8Array
    static uint16(num: number, littleEndian = false) {
        return bytes.fromInt(num, 2, false, littleEndian)
    }

    // Casts bytes to unsigned int16
    static fromUInt16(data: Uint8Array, littleEndian = false) {
        assertIntBytesLength(data, 2)
        return bytes.toInt(data, false, littleEndian)
    }

    // Casts signed int32 to Uint8Array
    static int32(num: number, littleEndian = false) {
        return bytes.fromInt(num, 4, true, littleEndian)
    }

    // Casts bytes to signed int32
    static fromInt32(data: Uint8Array, littleEndian = false) {
        assertIntBytesLength(data, 2)
        return bytes.toInt(data, true, littleEndian)
    }

    // Casts unsigned int32 to Uint8Array
    static uint32(num: number, littleEndian = false) {
        return bytes.fromInt(num, 4, false, littleEndian)
    }

    // Casts bytes to unsigned int32
    static fromUInt32(data: Uint8Array, littleEndian = false) {
        assertIntBytesLength(data, 2)
        return bytes.toInt(data, false, littleEndian)
    }

}
