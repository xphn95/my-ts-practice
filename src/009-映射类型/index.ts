// 映射类型 循环 key

/*
  [P in K]: T 拷贝属性
  [P in K]?: T 所有属性可选
  [P in K]-?: T 所有属性去掉可选
  readonly [P in K]: T 所有属性只读
  -readonly [P in K]: T 所有属性去掉只读
*/

type Person = {
  readonly name: string
  age?: number
  man: boolean
}

type T = {
  [P in keyof Person]: Person[P]
}

export {}
