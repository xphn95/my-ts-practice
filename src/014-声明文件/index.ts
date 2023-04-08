// 声明文件 xx.d.ts 声明类型, 不做实现

/* 特殊
  export as namespace UMD 库声明全局变量
  declare global 扩展全局变量
  declare module 'xxx' 扩展xxx模块
  /// <reference /> 三斜线指令
*/

import type { Dog } from './test'
const dog: Dog = {
  name: 'dog',
  age: 1
}

export {}
