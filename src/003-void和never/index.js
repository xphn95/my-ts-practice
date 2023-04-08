"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function fn() {
    console.log('aaa');
}
fn();
function fn2() {
    throw new Error('抛出错误');
}
fn2();
