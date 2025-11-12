"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Typescript Narrowing with classes
class Person {
    play() {
        console.log("He or she  can play");
    }
    study() {
        console.log("He or she can study");
    }
}
let person1 = new Person();
if (person1 instanceof Person) {
    person1.play();
    person1.study();
}
else {
    console.log("It is not a person");
}
//typeof operator
let age = 20;
if (typeof age === "number" && age > 18) {
    console.log("He or she can vote");
}
else {
    console.log("He or she cannot vote");
}
//Equality
let numstring = "abc";
let num = "abc";
if (numstring === num) {
    console.log(numstring.toUpperCase());
    console.log(num.toLocaleString());
    console.log(num.toLowerCase());
}
//Truthiness
//Coercing to boolean types , typescript has that functionality to give output 
function printAll(strs) {
    if (strs !== null) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}
function move(animal) {
    if ("swim" in animal) {
        return animal.swim();
    }
    return animal.fly();
}
const fish = {
    swim: () => console.log("Fishes can swim"),
};
const bird = { fly: () => console.log("Birds can fly"),
};
move(bird);
move(fish);
function categorisepet(pet) {
    return pet.swim !== undefined;
}
const eagless = {
    fly: () => console.log("Eagles can fly"),
};
categorisepet(eagless);
eagless.fly();
// Typeguards, and functions
//# sourceMappingURL=Typescript_Concepts.js.map