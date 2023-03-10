"use strict";
function greet(person, date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
greet("Maddison", Date()); //Date() returns a string in javascript
greet("Maddison", new Date());
let obj = { x: 0 };
obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const n = obj;
let obj2 = "somethign";
obj2();
let s = "something else";
let s2 = "fsdf"; // this is not necessary
// No type annotations here, but TypeScript can spot the bug
const names = ["Alice", "Bob", "Eve"];
names.forEach((s) => {
    console.log(s.toUppercase());
});
names.forEach((s) => {
    console.log(s.toUpperCase());
});
// The parameter's type annotation is an object type
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });
