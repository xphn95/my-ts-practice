// 装饰器函数
interface Cat {
  name: string
  age: number
}

const log1: ClassDecorator = target => {
  console.log(target)
  target.prototype.name = '小橘猫'
}

const log2 = (age: number): ClassDecorator => {
  console.log(age)
  return target => {
    target.prototype.age = age
  }
}

@log1
@log2(2)
class Cat {}

const cat = new Cat()

console.log(cat.name, cat.age)

// 属性装饰器
interface Dog {
  name: string
}

const log3: PropertyDecorator = (target, name) => {
  console.log(target, name)
  Reflect.defineProperty(target.constructor, 'log', {
    configurable: true,
    enumerable: false,
    writable: true,
    value: () => { console.log('new dog') }
  })
}

class Dog {
  @log3
  name = 'name dog'
}

const dog = new Dog()
console.log(dog.name)
;(Dog as any).log()

// 方法装饰器
const log4: MethodDecorator = (...args) => {
  console.log(args)
}

class Man {
  @log4
  sayHi (name: string, age: number): void {}
}

// 参数装饰器
const log5: ParameterDecorator = (...args) => {
  console.log(args)
}
class Woman {
  sayHi (@log5 name: string, @log5 age: number): void {}
}

export {}
