import {DataType} from "@/types";

const assert = require("assert").strict
import * as bytes from "@/bytes"
import * as convert from "@/convert"
import {convertString} from "@/convert";

describe('fromInt', () => {
    [
        {
            data: {num: 10, size: 4, sign: false, littleEndian: false},
            expect: [0, 0, 0, 10]
        },
        {
            data: {num: 10, size: 4, sign: false, littleEndian: true},
            expect: [10, 0, 0, 0]
        },
        {
            data: {num: 10, size: 4, sign: true, littleEndian: false},
            expect: [0, 0, 0, 10]
        },
        {
            data: {num: -10, size: 4, sign: true, littleEndian: false},
            expect: [128, 0, 0, 10]
        },
        {
            data: {num: -10, size: 4, sign: true, littleEndian: true},
            expect: [10, 0, 0, 128]
        },
        {
            data: {num: 256, size: 2, sign: false, littleEndian: false},
            expect: [1, 0]
        },
        {
            data: {num: 16909060, size: 4, sign: false, littleEndian: false},
            expect: [1, 2, 3, 4]
        },
        {
            data: {num: 65535, size: 2, sign: false, littleEndian: false},
            expect: [255, 255]
        },
    ].forEach(test => {
        it(`${test.data.littleEndian ? 'little endian ' : ''}${test.data.sign ? 'signed ' : ''}${test.data.num} size ${test.data.size}`, () => {
            const d = test.data
            const res = Array.from(bytes.fromInt(d.num, d.size, d.sign, d.littleEndian))
            assert.deepEqual(res, test.expect)
        })
    })
})

describe('toInt', () => {
    [
        {
            data: {bytes: [0, 0, 0, 10], sign: false, littleEndian: false},
            expect: 10
        },
        {
            data: {bytes: [10, 0, 0, 0], sign: false, littleEndian: true},
            expect: 10
        },
        {
            data: {bytes: [128, 0, 0, 10], sign: true, littleEndian: false},
            expect: -10
        },
        {
            data: {bytes: [1, 2, 3, 4], sign: false, littleEndian: false},
            expect: 16909060
        },
        {
            data: {bytes: [4, 3, 2, 1], sign: false, littleEndian: true},
            expect: 16909060
        },
        {
            data: {bytes: [2, 1], sign: false, littleEndian: false},
            expect: 513
        },
        {
            data: {bytes: [129], sign: true, littleEndian: false},
            expect: -1
        },
        {
            data: {bytes: [129], sign: false, littleEndian: false},
            expect: 129
        },
    ].forEach(test => {
        it(`${test.data.littleEndian ? 'little endian ' : ''}${test.data.sign ? 'signed ' : ''}${test.data.bytes}`, () => {
            const d = test.data
            assert.deepEqual(bytes.toInt(new Uint8Array(d.bytes), d.sign, d.littleEndian), test.expect)
        })
    })
})
