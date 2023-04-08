/*
  T(type) 类型
  K(key) 键
  V(value) 值
  E(element) 元素
*/

// 函数泛型
const fn1 = <T>(a: T): void => {
  console.log(a)
}

fn1<string>('aaa')
fn1<number>(123)

// 接口泛型
interface Person<T> {
  name: T
}
const p1: Person<string> = {
  name: 'p1'
}
console.log(p1)

// 类型别名泛型
type Cat<T> = T | number
const c1: Cat<string> = 123
console.log(c1)

// 类的泛型
class Dog<T> {
  constructor (public name: T) {
    this.name = name
  }
}
const dog1 = new Dog<string>('dog1')
const dog2 = new Dog<number>(123)
console.log(dog1, dog2)

export {}
