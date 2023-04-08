export {}

type MyParameter<T extends (...args: any[]) => any> = T extends (...args: infer U) => any ? U : never

const func = (arg1: string, arg2: number): void => {}

type MyParameterPreview = MyParameter<typeof func>
