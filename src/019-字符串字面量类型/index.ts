export {}

// 简单用法
type T0 = 'cat'
type T1 = `hello ${T0}`

// 联合类型用法
type name = 'cat' | 'dog'
type age = 1 | 2

type T2 = `${name}-${age}`

// 泛型用法
type T3<T extends string> = `${T}-${age}`
type T4 = T3<name>
type T5<T> = `${Extract<T, string>}-${age}`
type T6 = T5<name>

// 映射类型用法
interface Person {
  name: string
  age: number
}
type T7 = {
  [K in keyof Person as `get${Capitalize<K>}`]: () => Person[K]
}

// infer 使用: 提取字符串
type T8 = 'cat-123' | 'dog-123'
type T9<T, U extends string> = T extends `${infer R}-${U}`
  ? R
  : never
type T10 = T9<T8, '123'>
