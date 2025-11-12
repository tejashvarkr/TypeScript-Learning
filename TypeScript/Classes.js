"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
//Classes
class Person {
    name;
    username;
    constructor(name, username) {
        this.name = name;
        this.username = username;
    }
    makeSound() {
        console.log(`${this.name} is making a sound`);
    }
}
const Person1 = new Person('AA', '');
Person1.makeSound();
class shape {
    length;
    breadth;
    constructor(length, breadth) {
        this.length = typeof length === 'string' ? Number(length) : length;
        this.breadth = breadth;
        console.log("Constructor Overloading occurs when we have two or more constructors with the same name , different numbers");
    }
    scale(length, breadth) {
        this.length *= 1;
        this.breadth *= 1;
    }
}
class Triangle extends shape {
    constants;
    constructor(length, breadth, constants) {
        super(length, breadth);
        this.constants = constants;
    }
    area() {
        console.log(`Area of Triangle = ${(this.length * this.breadth) / this.constants}`);
    }
}
let triangleobj = new Triangle(1, 2, 3);
triangleobj.area();
console.log(triangleobj.constants);
console.error(triangleobj.constants);
console.warn("Hello there");
class C {
    _length = 0;
    get length() {
        return this._length;
    }
    set length(value) {
        this._length = value;
    }
}
class Myclass {
    check(s) {
        return this[s];
    }
}
class Sonar {
    ping() {
        console.log("ping!");
    }
}
class Ball {
    ping() {
        console.log("pong!");
    }
}
//Explored extends clause,arrow functions,implements clauses,access modifiers
class Animal {
    move() {
        console.log("The animal moves...");
    }
}
class Dog extends Animal {
    makeSound() {
        console.log("Woof!");
    }
    move() {
        console.log("Dog moves with 4 legs waging its tail happily");
    }
}
class Cat extends Animal {
    makeSound() {
        console.log("Meow!");
    }
}
const dog = new Dog();
dog.makeSound();
dog.move();
const cat = new Cat();
cat.makeSound();
cat.move();
//# sourceMappingURL=Classes.js.map