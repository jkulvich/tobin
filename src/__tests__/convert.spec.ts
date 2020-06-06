import {DataType} from "@/types";

const assert = require("assert").strict
import * as bytes from "@/bytes"
import * as convert from "@/convert"
import {convertString} from "@/convert";

describe('nt strings to bin to str', () => {
    [
        {data: "hello"},
        {data: "Hi, how are you?"},
        {data: "Тестовая строка"},
    ].forEach(test => {
        it(`${test.data} to bin <-> str`, () => {
            const data = convert.convertString(test.data)
            const str = convert.parseString(data)
            assert.deepEqual(str, test.data)
        })
    })
})

describe('short strings to bin to str', () => {
    [
        {data: "hello"},
        {data: "Hi, how are you?"},
        {data: "Тестовая строка"},
    ].forEach(test => {
        it(`${test.data} to bin <-> str`, () => {
            const data = convert.convertShortString(test.data)
            const str = convert.parseShortString(data)
            assert.deepEqual(str, test.data)
        })
    })
})
