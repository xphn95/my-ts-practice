class Cat {
  // name: string = '布偶'
  name: string

  // 构造器
  constructor (name: string) {
    this.name = name
  }

  // 方法
  sayHi (): void {
    console.log('hi')
  }
}

const cat1: Cat = new Cat('英短')
cat1.sayHi()
console.log(cat1.name)

class Animal {
  name: string

  constructor (name: string) {
    this.name = name
  }

  sayHi (): void {
    console.log('hello')
  }
}

class Dog extends Animal {
  age: number
  constructor (name: string, age: number) {
    super('动物')
    this.name = name
    this.age = age
  }
}

const dog: Dog = new Dog('dog', 2)

dog.sayHi()
console.log(dog)

// 修饰符
class Man {
  // 公共属性
  public name: string = '男人'
  // 私有属性(class 里面才能访问)
  private age: number = 5
  // 静态属性
  static sex: string = '女'

  sayHi (): void {
    this.age = 6
    console.log(this.age)
  }

  // 这样就可以省略在类中在声明一遍
  // num: number
  constructor (public num: number) {
    this.num = num
  }
}

Man.sex = '男'
const man1 = new Man(10)
man1.name = '女人'
console.log(man1)
man1.sayHi()

// 抽象类 无法被实例化, 它是用来被继承的
abstract class Woman {
  sayHi (): void {
    console.log('抽象类')
  }
}
class Person extends Woman {}

// const woman1 = new Woman()
const person1 = new Person()
person1.sayHi()

// 接口&类
interface I1 {
  name: string
  sayHi: () => void
}
interface I2 {
  age: number
}
class C1 implements I1, I2 {
  name: string = 'c1'
  age: number = 7
  sayHi (): string {
    return this.name
  }
}
const c1 = new C1()
console.log(c1)

// 函数重载&类
class C2 {
  // 重载签名
  fn (): void
  fn (): number
  // 实现签名
  fn (): number {
    console.log(10)
    return 10
  }
}
const c2 = new C2()
c2.fn()

export {}
