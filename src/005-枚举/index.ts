// 数字
enum List {
  RED,
  BLUE = 4,
  GREEN
}

const color: List = List.RED
const color1: string = List[5]
console.log(color, color1)

// 字符串 与数字的不同没有反向查
enum Person {
  HEAD = 'HEAD',
  HAND = 'HAND',
  FOOT = 'FOOT'
}

const body: Person = Person.HAND
console.log(body)

// 常量枚举 不会编译枚举类型直接获取值
const enum ANIMAL {
  CAT,
  DAG,
  PANDA
}

const a1: ANIMAL = ANIMAL.CAT
console.log(a1)

// 异构枚举 字符串和数字混合的枚举
enum STR {
  A = 'A',
  B = 3,
  C = 6,
  D = 'D',
  E = 'E'
}

console.log(STR[3], typeof STR.D)

export {}
