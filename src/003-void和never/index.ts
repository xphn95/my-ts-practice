function fn (): void {
  console.log('aaa')
}

fn()

function fn2 (): never {
  throw new Error('抛出错误')
}

fn2()

export {}
