"use strict";
//Typescript Fundamentals
Object.defineProperty(exports, "__esModule", { value: true });
//Type conversion is an implicit or explicit conversion , type coercion is automatic 
let a = "1";
let b = 25;
console.log(a + b);
//Type definition in parameters of function
function calculate(a, b, c) {
    return a * b * c;
}
calculate(1, 2, 3);
console.log(calculate(1, 2, 3));
//Understood installing and setting up typescript , noted the commands like tsc ,tsc --init, ts-node
//Understanding Typescript Datatypes
//Number, string , boolean are three common datatypes used 
//Use of any 
let obj;
obj = "foobar" + 2;
console.log(obj);
//Noimplicitany will avoid type checking further more
let myname = "Tejashvar"; //Direct Association to the type of the string
console.log(myname);
//Use of unknown datatype that typescript provides
// function add(a:unknown)
// {
//     a.subtract();
// }
function nullundefined(x) {
    if (x === null) {
        console.log("The value of x is null");
    }
    else {
        console.log("The value of x is" + x);
    }
}
async function promise() {
    return 9;
}
const floor = ["1", "2", "3"];
floor.forEach(function (s) {
    console.log("Floor" + s.toUpperCase());
});
function adds(a) {
    a.subtract();
}
function subtract() {
    return;
}
//Return type and parameter type checking
function name(name) {
    console.log(`${name}`);
    return name;
}
name("Tejashvar K.R");
//Understanding Functions with returning never datatype , should not have a reachable point.
//   function retur(message:string) :never {
//   throw new Error(message);
// }
function object(pt) {
    console.log(`${pt.x}, ${pt.y}`);
}
object({ x: 1, y: 3 });
//Narrowing and Union
function parameter(x) {
    if (typeof x === "string")
        console.log(x.toUpperCase());
    else {
        console.log(x);
    }
}
function coordinates(point) {
    console.log(point.x);
    console.log(point.y);
}
//As type
let someValue = "Hello, I am Tejashvar!";
let strLength = someValue.length;
console.log(strLength);
//Not null assertion
let names = "Something";
let nameLength = names.length;
let namelengths = names?.length ?? 0;
console.log(nameLength);
console.log(namelengths);
let tuplesconst = [1, "blue"];
//# sourceMappingURL=Typescript_Fundamentals.js.map