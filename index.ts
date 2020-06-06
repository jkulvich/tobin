/*
Set of functions for integer numbers conversion
 */

import * as bytes from "@/bytes"

// Casts unsigned byte to Uint8Array
export function byte(num: number) {
    return bytes.getIntBytes(num, 1)
}

// Casts signed byte to Uint8Array
export function sbyte(num: number) {
    return bytes.getIntBytes(num, 1, true)
}

// Casts signed int16 to Uint8Array
export function int16(num: number) {
    return bytes.getIntBytes(num, 2, true)
}

// Casts unsigned int16 to Uint8Array
export function uint16(num: number) {
    return bytes.getIntBytes(num, 2)
}

// Casts signed int32 to Uint8Array
export function int32(num: number) {
    return bytes.getIntBytes(num, 4, true)
}

// Casts unsigned int32 to Uint8Array
export function uint32(num: number) {
    return bytes.getIntBytes(num, 4)
}
