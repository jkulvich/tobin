const assert = require("assert").strict
import * as bytes from "@/bytes"

describe('getIntBytes', () => {
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
    ].forEach(test => {
        it(`${test.data.littleEndian ? 'little endian ' : ''}${test.data.sign ? 'signed ' : ''}${test.data.num} size ${test.data.size}`, () => {
            const d = test.data
            const res = Array.from(bytes.getIntBytes(d.num, d.size, d.sign, d.littleEndian))
            assert.deepEqual(res, test.expect)
        })
    })
})
