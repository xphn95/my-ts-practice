export {}
type Eventhandler = (...args: any[]) => any

interface Emitter {
  events: Map<string, Eventhandler[]>
  on: (eventName: string, cb: Eventhandler) => void
  emit: (eventName: string, data: any) => void
  remove: (eventName: string) => void
  clear: () => void
}

class EventEmitter implements Emitter {
  events = new Map<string, Eventhandler[]>()
  // 订阅
  on (eventName: string, cb: Eventhandler): void {
    let e = this.events.get(eventName)
    if (e == null) {
      e = []
      this.events.set(eventName, e)
    }
    e.push(cb)
  }

  emit (eventName: string, data: any): void {
    const e = this.events.get(eventName)
    if (e !== undefined) {
      e.forEach(cb => {
        cb(data)
      })
    }
  }

  remove (eventName: string): void {
    const e = this.events.has(eventName)
    if (e) {
      this.events.delete(eventName)
    }
  }

  clear (): void {
    this.events.clear()
  }
}

const event = new EventEmitter()

event.on('read', data => {
  console.log(data, '订阅者A')
})
event.on('read', data => {
  console.log(data, '订阅者B')
})

event.emit('read', 'new message')

event.on('read_', data => {
  console.log(data, '订阅者C')
})
event.on('read_', data => {
  console.log(data, '订阅者D')
})

event.emit('read_', 'new message_')

event.remove('read')
event.emit('read', 'after remove')

event.clear()
event.emit('read_', 'after remove read_')
