// object properties

// The parameter's type annotation is an object type, z? an optional property
function printCoord(pt: { x: number; y: number , z?: number}) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
    if (pt.z !== undefined) {
        console.log(`The coordinate's z value is ${pt.z}`)
    }
}
printCoord({ x: 3, y: 7 });
printCoord({ x: 3, y: 7, z: 3 });


// union types

function printId(id: number | string) {
    console.log("Your ID is: " + id);
  }

// OK
printId(101);
// OK
printId("202");
// Error
//printId({ myID: 22342 });
//Argument of type '{ myID: number; }' is not assignable to parameter of type 'string | number'.



// function printId(id: number | string) {
//     console.log(id.toUpperCase());
//     //  Property 'toUpperCase' does not exist on type 'string | number'.
//     //   Property 'toUpperCase' does not exist on type 'number'.
// }

function printId2(id: number | string) {
    if (typeof id === "string") {
      // In this branch, id is of type 'string'
      console.log(id.toUpperCase());
    } else {
      // Here, id is of type 'number'
      console.log(id);
    }
}


function welcomePeople(x: string[] | string) {
    if (Array.isArray(x)) {
      // Here: 'x' is 'string[]'
      console.log("Hello, " + x.join(" and "));
    } else {
      // Here: 'x' is 'string'
      console.log("Welcome lone traveler " + x);
    }
  }

// Sometimes you’ll have a union where all the members have something in common. For example, both arrays and strings have a slice method. \
// If every member in a union has a property in common, you can use that property without narrowing:
// Return type is inferred as number[] | string
function getFirstThree(x: number[] | string) {
    return x.slice(0, 3);
}



type Point = {
    x: number;
    y: number;
};
   
  // Exactly the same as the earlier example
function printCoord3(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
   

type ID = number | string;

sanitize("s")

// An interface declaration is another way to name an object type:
interface Point2 {
    x: number;
    y: number;
}

// Type aliases and interfaces are very similar, and in many cases you can choose between them freely. 
// Almost all features of an interface are available in type, the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable.


// extending interfaces
interface Animal {
    name: string
  }
  
interface Bear extends Animal {
    honey: boolean
}
  
const bear: Bear = {
    name: "macko usko", 
    honey: true

}
bear.name
bear.honey

// extending types via intersections

type Animal2 = {
    name: string
}
  
type Bear2 = Animal2 & { 
    honey: boolean 
}
const bear2: Bear2 = {
    name: "macko usko", 
    honey: true
}
bear2.name;
bear2.honey;


