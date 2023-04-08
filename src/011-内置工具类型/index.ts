// partial 所有属性变成可选
type Person = {
  name: string
  age?: number
  sex: boolean
}

type A = Partial<Person>
type MyPartial<T extends object> = {
  [K in keyof T]?: T[K]
}
type ResMyPartial = MyPartial<Person>

// required 所有属性去除可选
type B = Required<Person>
type MyRequired<T extends object> = {
  [P in keyof T]-?: T[P]
}
type ResMyRequired = MyRequired<Person>

// pick 提取指定 key 为新类型
type MyPick<T extends object, K extends keyof T> = {
  [P in K]: T[P]
}
type ResMyPick = MyPick<Person, 'name' | 'sex'>

// record 用指定 key 构建新类型
type MyRecord<K extends keyof any, T> = {
  [P in K]: T
}

type ResMyRecord = MyRecord<'name' | 'age', string>

// exclude 不包含
type MyExclude<T, U> = T extends U ? never : T
type ResMyExclude = MyExclude<string | number, number>

// extract 包含
type MyExtract<T, U> = T extends U ? T : never
type ResMyExtract = MyExtract<string | number, number>

// omit 排除指定的 key
type MyOmit<T, U extends keyof T> = {
  [P in MyExclude<keyof T, U>]: T[P]
}
type ResMyOmit = MyOmit<Person, 'name' | 'sex'>
export {}
