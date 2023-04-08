"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 数字
var List;
(function (List) {
    List[List["RED"] = 0] = "RED";
    List[List["BLUE"] = 4] = "BLUE";
    List[List["GREEN"] = 5] = "GREEN";
})(List || (List = {}));
const color = List.RED;
const color1 = List[5];
console.log(color, color1);
// 字符串 与数字的不同没有反向查
var Person;
(function (Person) {
    Person["HEAD"] = "HEAD";
    Person["HAND"] = "HAND";
    Person["FOOT"] = "FOOT";
})(Person || (Person = {}));
const body = Person.HAND;
console.log(body);
const a1 = 0 /* ANIMAL.CAT */;
console.log(a1);
