# Library for binary conversion
The small library for binary types casting written on TypeScript.  

# Installation
`yarn add tobin`

# Repo and issues
repo: https://github.com/jkulvich/tobin  
issues: https://github.com/jkulvich/tobin/issues

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
- [ ] double // ES2020 only with BigInt
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
