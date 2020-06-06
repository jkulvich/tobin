[![CircleCI](https://circleci.com/gh/jkulvich/tobin.svg)](https://circleci.com/gh/jkulvich/tobin)
[![Master Version](https://img.shields.io/github/package-json/v/jkulvich/tobin/master.svg?style=flat-square)](https://github.com/jkulvich/tobin)
[![GitHub](https://img.shields.io/github/license/jkulvich/tobin?style=flat-square)](https://github.com/jkulvich/tobin/blob/master/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/jkulvich/tobin?style=flat-square)](https://github.com/jkulvich/tobin/issues)
[![npm](https://img.shields.io/npm/dw/tobin?style=flat-square)](https://www.npmjs.com/package/tobin)
[![GitHub top language](https://img.shields.io/github/languages/top/jkulvich/tobin?style=flat-square)](https://github.com/jkulvich/tobin)

# :construction: Please, wait for release
If you need in stability, please wait for release before use.
API may be change till release.

- [:ru: RUS](./README.ru.md) - Русская документация
- [:uk: ENG](./README.md) - English documentation

# About
This is small and lightweight library for binary conversion written on TypeScript.
The library allows creating and parsing binary structures.

Or it can be used as a part of big binary serialization library.  
(P.S. Coming soon)

# Installation
:cat2: with **yarn**:  
`yarn add tobin`

:wrench: with **npm**:  
`npm i tobin`

# Repo and issues
:floppy_disk: repo: https://github.com/jkulvich/tobin  
:speech_balloon: issues: https://github.com/jkulvich/tobin/issues

# Supported types

- [x] byte
- [x] sbyte
- [x] int16
- [x] uint16
- [x] int32
- [x] uint32
- [ ] int64 // ES2020 only with BigInt
- [ ] uint64 // ES2020 only with BigInt
- [ ] float
- [ ] double
- [x] bool
- [ ] string
    - [x] string // Null Terminated String (default)
    - [x] short-string // Short String (255 bytes max)
    - [ ] fixed-string // String with fixed size. Null Terminated if less than size

# Examples

```javascript
import tobin from "tobin"

// Simple conversion
tobin.byte(5) // [5]
tobin.uint16(65535) // [255, 255]
tobin.int32(500) // [0, 0, 1, 244]

// Negative values
tobin.int32(-500) // [128, 0, 1, 244]

// Little Endian support
tobin.int32(-500, true) // [244, 1, 0, 128]

// Reverse conversion
tobin.fromSByte(new Uint8Array([129])) // -1

// Little Endian also
tobin.fromInt32(new Uint8Array([4, 3, 2, 1]), true) // 16909060
```
