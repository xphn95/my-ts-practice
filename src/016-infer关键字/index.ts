export {}

// 通过占位推断类型
// 必须在条件类型中使用 结果必须在正确判断中
type T0<T> = T extends infer U ? U : never
type T1 = T0<string>

type T2<T> = T extends Array<infer R> ? R : never
type T3 = T2<number[]>

type T4 = T2<[string | number]>

type TReturn<T extends () => any> = T extends (...arg: any) => infer U
  ? U
  : never

const fn = (): number => 20
type T5 = TReturn<typeof fn>

type TParams<T extends (...arg: any) => any> = T extends (...args: infer U) => any
  ? U
  : never

const fn1 = (a: string, b: boolean): void => {}
type T6 = TParams<typeof fn1>

class Cat {
  name: string = 'cat'
  sayHi (): void {}
}

type T7 = InstanceType<typeof Cat>
