# Library for binary conversion
The small library for binary types casting written on TypeScript.  

# Supported types

- byte
- sbyte
- int16
- uint16
- int32
- uint32
- int64 // ES2020 only with BigInt
- uint64 // ES2020 only with BigInt
- float32
- double // ES2020 only with BigInt
- bool
- string
    - ntstring // Null Terminated String (default)
    - shstring // Short String (255 bytes max)
    - fxstring // String with fixed size. Null Terminated if less than size

# Examples

```javascript
import tobin from "tobin"

tobin.int32(18) // [0, 0, 0, 18]
tobin.int32(-18) // [128, 0, 0, 18]
tobin.fromInt32([0, 0, 0, 18]) // 18
```
