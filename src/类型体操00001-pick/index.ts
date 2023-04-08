export {}

type MyPick<T, U extends keyof T> = {
  [K in U]: T[K]
}

interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>
