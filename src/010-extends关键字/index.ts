type T0 = string extends string | number ? 'x' : 'y'
type T1 = string | number extends string ? 'x' : 'y'

type A = {
  name: string
}
type B = {
  name: string
  age: number
}
// 理解为 B 的条件更苛刻符合条件的更少
type T2 = A extends B ? string : number
type T3 = B extends A ? string : number

// 相当于带入两次结果取并集
type T4<T> = T extends 'x' ? string : number
type T5 = T4<'x' | 'y'>
// 应用提取某些类型
type T6<T, U> = T extends U ? T : never
type T7 = T6<'a' | 'b' | 'c', 'a' | 'b'>
type T8<T, U> = T extends U ? never : T
type T9 = T8<'a' | 'b' | 'c', 'a' | 'b'>

export {}
