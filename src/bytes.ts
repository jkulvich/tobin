/*
Set of functions for working with bytes
 */

import {assertInteger, assertIntSize, assertSize} from "@/checks";

// Returns integer number bytes
export function getIntBytes(num: number, size: number, sign = false, littleEndian = false) {
    assertInteger(num)
    assertSize(size)
    assertIntSize(num, size, sign)

    const bytes = new Uint8Array(size)
    for (let i = 0; i < size; i++) {
        bytes[size - i - 1] = ((Math.abs(num) >>> 8 * i) & 0b1111_1111)
    }

    if (num < 0) bytes[0] |= 0b1000_0000

    return littleEndian ? bytes.reverse() : bytes
}
