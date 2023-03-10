"use strict";
// The parameter's type annotation is an object type
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
    if (pt.z !== undefined) {
        console.log(`The coordinate's z value is ${pt.z}`);
    }
}
printCoord({ x: 3, y: 7 });
printCoord({ x: 3, y: 7, z: 3 });
