/*
Set of functions for working with bytes
 */

import {assertIntBytesLength, assertInteger, assertIntValue, assertSize} from "@/asserts";

// Returns bytes for integer number
export function fromInt(num: number, size: number, sign = false, littleEndian = false) {
    assertInteger(num)
    assertSize(size)
    assertIntValue(num, size, sign)

    const bytes = new Uint8Array(size)
    for (let i = 0; i < size; i++) {
        bytes[size - i - 1] = ((Math.abs(num) >>> 8 * i) & 0b1111_1111)
    }

    // Sign adding
    if (num < 0) bytes[0] |= 0b1000_0000

    return littleEndian ? bytes.reverse() : bytes
}

// Returns integer number for bytes
export function toInt(bytes: Uint8Array, sign = false, littleEndian = false) {
    assertIntBytesLength(bytes)

    let bts = littleEndian ? bytes.reverse() : bytes.slice()
    const sgn = sign ? (bytes[0] & 0b1000_0000 ? -1 : 1) : 1

    // Sign removing
    if (sign) bts[0] &= 0b0111_1111

    let num = bts[0]
    for (let i = 1; i < bytes.length; i++) {
        num = num << 8
        num += bts[i]
    }

    return num * sgn
}
