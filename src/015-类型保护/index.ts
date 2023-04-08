export {}

// in
interface Cat {
  name: string
  jump: boolean
}

interface Dog {
  name: string
  bark: boolean
}

type Animal = Cat | Dog
const getAnimal = (o: Animal): void => {
  if ('jump' in o) {
    console.log(o.name)
  } else {
    console.log(o.name)
  }
}

// typeof 判断基本类型
const fn1 = (a: string | number): string | number => {
  if (typeof a === 'string') {
    return a.length
  } else {
    return a + 1
  }
}

const res1 = fn1(2)
const res2 = fn1('1234')
console.log(res1, res2)

// instanceof 判断引用类型
class Person {
  name: string = 'person'
}
const p1 = new Person()

if (p1 instanceof Person) {
  console.log(true)
}

// is 收窄指定类型
const isStr = (str: unknown): str is string => {
  return typeof str === 'string'
}

const getLength = (o: unknown): number => {
  if (isStr(o)) {
    return o.length
  }
  return 1
}

console.log(getLength('qwer'))
