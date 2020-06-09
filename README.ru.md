[![CircleCI](https://circleci.com/gh/jkulvich/tobin.svg)](https://circleci.com/gh/jkulvich/tobin)
[![Master Version](https://img.shields.io/github/package-json/v/jkulvich/tobin/master.svg?style=flat-square)](https://github.com/jkulvich/tobin)
[![GitHub](https://img.shields.io/github/license/jkulvich/tobin?style=flat-square)](https://github.com/jkulvich/tobin/blob/master/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/jkulvich/tobin?style=flat-square)](https://github.com/jkulvich/tobin/issues)
[![npm](https://img.shields.io/npm/dw/tobin?style=flat-square)](https://www.npmjs.com/package/tobin)
[![GitHub top language](https://img.shields.io/github/languages/top/jkulvich/tobin?style=flat-square)](https://github.com/jkulvich/tobin)

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

- [x] Byte
- [x] SByte
- [x] Int16
- [x] UInt16
- [x] Int32
- [x] UInt32
- [ ] Int64 // Только ES2020 с BigInt
- [ ] UInt64 // Только ES2020 с BigInt
- [ ] Float
- [ ] Double
- [x] Bool
- [ ] String
    - [x] String // Строка завершающаяся null символом (стандартная)
    - [x] ShortString // Короткая строка (максимум 255 байт)
    - [ ] FixedString // Строка фиксированного размера. Завершается null, если короче размера

# Примеры

Формально:
```
tobin.(convert|parse)(S?Byte|U?Int16|U?Int32|U?Int64|Float|Double|Bool|(Short|Fixed)?String)
```

```javascript
import tobin from "tobin"

tobin.convertInt32(500) // [0, 0, 1, 244]
tobin.convertInt32(-500) // [128, 0, 1, 244]
tobin.convertUInt16(65535) // [255, 255]
tobin.convertByte(128) // [128]
tobin.convertString("Hello") // [104, 101, 108, 108, 111, 0]
tobin.convertShortString("Hello") // [ 5, 104, 101, 108, 108, 111 ]

tobin.parseSByte(new Uint8Array([129])) // -1
tobin.parseString(new Uint8Array([104, 101, 108, 108, 111, 0])) // "Hello"
tobin.parseShortString(new Uint8Array([5, 104, 101, 108, 108, 111])) // "Hello"
```
