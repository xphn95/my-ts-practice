export {}

interface Sub {
  subs: Observer[]
  addObserver: (ob: Observer) => void
  removeObserver: (ob: Observer) => void
  clear: () => void
  notify: (c: string) => void
}
interface Obs {
  update: (c: string) => void
}

class Subject implements Sub {
  subs: Observer[] = []
  addObserver: (ob: Observer) => void = ob => {
    !this.subs.includes(ob) && this.subs.push(ob)
  }

  removeObserver: (ob: Observer) => void = (ob) => {
    const index = this.subs.findIndex(o => o === ob)
    index !== -1 && this.subs.splice(index, 1)
  }

  clear: () => void = () => {
    this.subs.length = 0
  }

  notify: (c: string) => void = (c) => {
    this.subs.forEach(ob => { ob.update(c) })
  }
}

class Observer implements Obs {
  constructor (public name: string, sub?: Subject) {
    this.name = name
    if (sub != null) {
      sub.addObserver(this)
    }
  }

  update: (c: string) => void = (c) => {
    console.log(`${this.name}${c}`)
  }
}

const s1 = new Subject()

const o1 = new Observer('观察者A', s1)
const o2 = new Observer('观察者B', s1)
const o3 = new Observer('观察者C', s1)

s1.removeObserver(o1)
s1.notify('更新上课')
console.log(s1.subs)
