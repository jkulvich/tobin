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
- [ ] bool
- [ ] string
    - [ ] ntstring // Null Terminated String (default)
    - [ ] shstring // Short String (255 bytes max)
    - [ ] fxstring // String with fixed size. Null Terminated if less than size

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
