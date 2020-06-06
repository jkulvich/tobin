# :construction: Ожидайте релиз
Если вам важна стабильность и последовательность библиотеки,
подождите релиза. Сейчас API может меняться.

- [:ru: RUS](./README.ru.md) - Русская документация
- [:uk: ENG](./README.md) - English documentation

# О проекте
Это небольшая и легковесная библиотека для бинарной конвертации,
написанная на TypeScript. Она позволяет конвертировать парсить
и приводить к бинарному виду JavaScript значения.

Или она может быть использована как часть более крупной библиотеки
сериализации (P.S. В разработке)

# Установка
:cat2: при помощи **yarn**:  
`yarn add tobin`

:wrench: при помощи **npm**:  
`npm i tobin`

# Репозиторий и обсуждения
:floppy_disk: repo: https://github.com/jkulvich/tobin  
:speech_balloon: issues: https://github.com/jkulvich/tobin/issues

# Поддерживаемые типы

- [x] byte
- [x] sbyte
- [x] int16
- [x] uint16
- [x] int32
- [x] uint32
- [ ] int64 // Только ES2020 с BigInt
- [ ] uint64 // Только ES2020 с BigInt
- [ ] float
- [ ] double
- [ ] bool
- [ ] string
    - [ ] ntstring // Строка завершающаяся null символом (стандартная)
    - [ ] shstring // Короткая строка (максимум 255 байт)
    - [ ] fxstring // Строка фиксированного размера. Завершается null, если короче размера

# Примеры

```javascript
import tobin from "tobin"

// Простая конвертация
tobin.byte(5) // [5]
tobin.uint16(65535) // [255, 255]
tobin.int32(500) // [0, 0, 1, 244]

// Отрицательные значения
tobin.int32(-500) // [128, 0, 1, 244]

// Поддержка Little Endian
tobin.int32(-500, true) // [244, 1, 0, 128]

// Обратная конвертация
tobin.fromSByte(new Uint8Array([129])) // -1

// Обратная в Little Endian
tobin.fromInt32(new Uint8Array([4, 3, 2, 1]), true) // 16909060
```
