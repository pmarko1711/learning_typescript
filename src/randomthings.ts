function greet(person: string, date: Date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

greet("Maddison", Date());  //Date() returns a string in javascript
greet("Maddison", new Date());


let obj: any = { x: 0 };

obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const n: number = obj;


let obj2: string = "somethign";

obj2();


let s = "something else"
let s2: string = "fsdf" // this is not necessary



// No type annotations here, but TypeScript can spot the bug
const names = ["Alice", "Bob", "Eve"];


names.forEach(
    (s) => {
        console.log(s.toUppercase())
    }
)


names.forEach(
    (s) => {
        console.log(s.toUpperCase())
    }
)


// The parameter's type annotation is an object type
function printCoord(pt: { x: number; y: number }) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });

