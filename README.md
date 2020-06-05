# Library for binary conversion
The small library for binary types casting written on TypeScript.  

# Supported types

- byte
- sbyte
- int16
- uint16
- int32
- uint32
- int64
- uint64
- bool
- string
    - ntstring // Null Terminated String (default)
    - shstring // Short String (255 bytes max)
    - fxstring // String with fixed size. Null Terminated if less than size
