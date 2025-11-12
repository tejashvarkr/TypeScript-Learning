import mongoose = require("mongoose");

//Classes
class Person
{
     name:string;
     readonly username?:string;
    constructor(name:string, username:string)
    {
        this.name=name;
        this.username=username;
    }
    makeSound():void{
        console.log(`${this.name} is making a sound`)
    }
}
const Person1=new Person('AA','')
Person1.makeSound();

class shape
{
    protected length: number;
    protected breadth: number;

    constructor(length:number,breadth:number);
    constructor(length:string,breadth:number);
    constructor(length:number|string,breadth:number)
    {
        this.length = typeof length === 'string' ? Number(length) : length;
        this.breadth = breadth;
        console.log("Constructor Overloading occurs when we have two or more constructors with the same name , different numbers");
    }
    scale(length: number,breadth:number): void {
    this.length *= 1;
    this.breadth *= 1;
}
}
class Triangle extends shape{

    constants:number
    constructor(length:number,breadth:number,constants:number)
    {super(length,breadth);
        this.constants=constants
    }

      area(): void {
    console.log(`Area of Triangle = ${(this.length * this.breadth)/this.constants}`);
  }
}  
let triangleobj= new Triangle(1,2,3);
triangleobj.area();
console.log(triangleobj.constants);
console.error(triangleobj.constants);
console.warn("Hello there")

class C {
  _length = 0;
  get length() {
    return this._length;
  }
  set length(value) {
    this._length = value;
  }
}
class Myclass{
    [s:string]:boolean | ((s:string)=>boolean);
    check(s:string)
    {

    return this[s] as boolean;
    }
}
interface Pingable {
  ping(): void;
}
 
class Sonar implements Pingable {
  ping() {
    console.log("ping!");
  }
}
 
class Ball implements Pingable {
ping() {
    console.log("pong!");
  }
}
//Explored extends clause,arrow functions,implements clauses,access modifiers
abstract class Animal {
  
  abstract makeSound(): void;
  
  move(): void {
    console.log("The animal moves...");
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Woof!");
  }
  move():void{
    console.log("Dog moves with 4 legs waging its tail happily");
  }
}

class Cat extends Animal {
  makeSound(): void {
    console.log("Meow!");
  }
}


const dog = new Dog();
dog.makeSound(); 
dog.move();     

const cat = new Cat();
cat.makeSound(); 
cat.move(); 