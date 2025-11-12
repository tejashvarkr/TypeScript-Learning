"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Generics
function generic(value) {
    return value;
}
console.log(generic(2));
class Generic {
    values = {};
    add;
}
let genericnumber = new Generic();
genericnumber.values = 0;
genericnumber.add = function (x, y) { return x + y; };
console.log(genericnumber.add(2, 3));
let generalgenericvariable = generic;
function identity(arg) {
    return arg;
}
let myIdentity = identity;
function measure(arg) {
    console.log(arg.length);
    return arg;
}
class BeeKeeper {
    hasMask = true;
}
class ZooKeeper {
    nametag = "Abc";
}
class Animal {
    numLegs = 4;
}
class Bee extends Animal {
    numLegs = 6;
    keeper = new BeeKeeper();
}
class Lion extends Animal {
    keeper = new ZooKeeper();
}
function createInstance(c) {
    return new c();
}
console.log(createInstance(Lion).keeper.nametag);
createInstance(Bee).keeper.hasMask;
console.log(createInstance(Bee).numLegs);
//# sourceMappingURL=Generics.js.map