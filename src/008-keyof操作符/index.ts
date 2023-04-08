// keyof 获取键名的联合类型
type S = keyof string
type N = keyof number
type T = keyof any

type GetObjProp = <T extends object, K extends keyof T>(obj: T, key: K) => T[K]

const obj = {
  name: 'obj',
  age: 20
}

const getObjProp: GetObjProp = (obj, k) => {
  return obj[k]
}

const res = getObjProp(obj, 'age')
console.log(res)
export {}
