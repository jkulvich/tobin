// Shortcuts for most common data sizes
export enum DataSize {
    Byte = 1,
    Word = 2,
    DWord = 4,
    QWord = 8,
    TWord = 10,
    OWord = 16,
    YWord = 32,
    ZWord = 64,
    NullTerminated = 0,
}

// Shortcuts for most common data types
export enum DataType {
    Byte = "byte",
    SByte = "sbyte",
    Int16 = "int16",
    UInt16 = "uint16",
    Int32 = "int32",
    UInt32 = "uint32",
    Int64 = "int64",
    UInt64 = "uint64",
    Float = "float",
    Double = "double",
    Bool = "bool",
    String = "string",
    ShortString = "short-string",
    FixedString = "fixed-string",
}
