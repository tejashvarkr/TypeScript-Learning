//Decorators

//Decorators are a feature of TypeScript that allow you to modify the behaviour of a class, property , method or parameter, help in adding addotional functionality to existing code.
import "reflect-metadata";
//Accessor Based Decorators
function log(
    target:Object,
    propertykey:string|Symbol,
    descriptor:PropertyDescriptor
)
{
    const originalMethod =descriptor.value;
    descriptor.value=function(...args:any[])
    {
        console.log(`Calling ${propertykey} with arguments: ${args}`);
        return originalMethod.apply(this,args);

    };
    return descriptor;
}
class Calculator{
    @log
    add(a:number,b:number):number{
        return a+b;
    }
}
const calculator = new Calculator();
console.log(calculator.add(1,2));

function first() {
  console.log("first(): factory evaluated");
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("first(): called");
  };
}
 
function second() {
  console.log("second(): factory evaluated");
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("second(): called");
  };
}
 
class ExampleClass {
  @first()
  @second()
  method() {}
}
//Classes Decorator 
function Logger(constructor: Function) {
  console.log(`Class created: ${constructor.name}`);
}

@Logger
class Person {
  constructor(name: string) {}
}

const p = new Person("Tejashvar");

function ReadOnly(target: any, propertyKey: string) {
  console.log(`Making ${propertyKey} read-only`);
}

//Method Decorators
class Example {
  @ReadOnly
  name = "Manju";
}

function Capitalize(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const original = descriptor.get!;
  descriptor.get = function () {
    const result = original.call(this);
    return result.toUpperCase();
  };
}

class Student {
  private _name: string;
  constructor(name: string) {
    this._name = name;
  }

  @Capitalize
  get name() {
    return this._name;
  }
}

const s = new Student("tejashvar");
console.log(s.name);

//Parameters based Decorators
function LogParameter(target: Object, propertyKey: string | symbol, parameterIndex: number) {
  console.log(`Parameter #${parameterIndex} of ${String(propertyKey)} is decorated`);
}

class Examples {
  greet(@LogParameter name: string) {
    console.log(`Hello, ${name}!`);
  }
}

const e = new Examples();
e.greet("Manju");

//Property Decorators with information about the metadata

function logType(target: any, propertyKey: string) {
  const type = Reflect.getMetadata("design:type", target, propertyKey);
  console.log(`${propertyKey} type: ${type.name}`);
}

class metadata {
  @logType
  message: string = "";
}



