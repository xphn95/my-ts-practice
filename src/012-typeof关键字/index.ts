const person = {
  name: 'person',
  age: 3,
  hobbies: ['唱歌', '跳舞'],
  address: {
    prevince: '四川',
    city: '成都'
  }
}

type Person = typeof person

type Address = typeof person['address']

enum Sex {
  MAN,
  WOMAN
}

type Sex_ = keyof typeof Sex
export {}
