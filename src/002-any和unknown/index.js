"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// any: 可以被任意值赋值, 也可以赋值给任意值
let a1 = 20;
a1 = 'abcd';
let num1 = 20;
console.log(a1);
num1 = a1;
console.log(num1);
// unknown 可以被任意值赋值, 不能赋值给任意值
const u1 = a1;
// let str: string = u1 X
a1 = u1;
