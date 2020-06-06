class CheckError extends Error {
    name = "Checks"
}

// Checks that the size value between 1 and 4
export function assertSize(size: number) {
    // JavaScript 2^53-1 number type restriction
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators
    if (isNaN(size) || size === null || size < 1 || size > 4)
        throw new CheckError(`incorrect size: expected value from 1 to 4, got ${size}`)
}

// Checks that the number is integer
export function assertInteger(num: number) {
    if (num !== (num | 0))
        throw new CheckError(`incorrect num: expected integer, got ${num}`)
}

// Checks that the value in the size
export function assertIntSize(num: number, size: number, sign = false) {
    const fullBits = 256 ** size - 1
    const max = sign ? (fullBits / 2) | 0 : fullBits
    const min = sign ? -(max + 1) : 0

    if (num < min || num > max)
        throw new CheckError(`incorrect num: expected value from ${min} to ${max}, got: ${num}`)
}

// Checks that the bytes array length between 1 and 4 or fixed size
export function assertIntBytesLength(bytes: Uint8Array, size?: number) {
    if (size && bytes.length !== size) {
        throw new CheckError(`incorrect bytes length: expected ${size}, got: ${bytes.length}`)
    }

    if (bytes.length < 1 || bytes.length > 4)
        throw new CheckError(`incorrect bytes length: expected length from 1 to 4, got: ${bytes.length}`)
}
