"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Functions
function print(s) {
    console.log(`s is ${s}`);
}
function printer(fn) {
    fn("a letter of the alphabet");
}
printer(print);
function printers(fns) {
    fns("Hello there!");
}
function doSomething(fn) {
    console.log(fn.description + " returned " + fn(6));
}
function myFunc(someArg) {
    return someArg > 3;
}
myFunc.description = "default description";
doSomething(myFunc);
function fn(ctor) {
    return new ctor("hello");
}
class BooleanClass {
    constructor(s) {
        return s.length > 4;
    }
}
const result = fn(BooleanClass);
console.log(result);
let rectangle = {
    length: 10,
    breadth: 12,
    calculate_area(length, breadth) {
        console.log(length * breadth);
    },
};
rectangle.calculate_area(rectangle.length, rectangle.breadth);
function add(a, b) {
    return a + b;
}
console.log(add(1, 2));
console.log(add("Strin", 1));
function sendToPrinter(pt) {
}
function getCursorPos() {
    return { x: 0, y: 0 };
}
console.log(sendToPrinter(getCursorPos()));
const f1 = () => {
    return true;
};
const f2 = () => true;
const f3 = function () {
    return true;
};
f1();
f2();
f3();
//# sourceMappingURL=Typescript_Functions.js.map