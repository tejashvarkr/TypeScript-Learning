"use strict";
//Decorators
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
//Decorators are a feature of TypeScript that allow you to modify the behaviour of a class, property , method or parameter, help in adding addotional functionality to existing code.
require("reflect-metadata");
//Accessor Based Decorators
function log(target, propertykey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`Calling ${propertykey} with arguments: ${args}`);
        return originalMethod.apply(this, args);
    };
    return descriptor;
}
class Calculator {
    add(a, b) {
        return a + b;
    }
}
__decorate([
    log,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Number)
], Calculator.prototype, "add", null);
const calculator = new Calculator();
console.log(calculator.add(1, 2));
function first() {
    console.log("first(): factory evaluated");
    return function (target, propertyKey, descriptor) {
        console.log("first(): called");
    };
}
function second() {
    console.log("second(): factory evaluated");
    return function (target, propertyKey, descriptor) {
        console.log("second(): called");
    };
}
class ExampleClass {
    method() { }
}
__decorate([
    first(),
    second(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ExampleClass.prototype, "method", null);
//Classes Decorator 
function Logger(constructor) {
    console.log(`Class created: ${constructor.name}`);
}
let Person = class Person {
    constructor(name) { }
};
Person = __decorate([
    Logger,
    __metadata("design:paramtypes", [String])
], Person);
const p = new Person("Tejashvar");
function ReadOnly(target, propertyKey) {
    console.log(`Making ${propertyKey} read-only`);
}
//Method Decorators
class Example {
    name = "Manju";
}
__decorate([
    ReadOnly,
    __metadata("design:type", Object)
], Example.prototype, "name", void 0);
function Capitalize(target, propertyKey, descriptor) {
    const original = descriptor.get;
    descriptor.get = function () {
        const result = original.call(this);
        return result.toUpperCase();
    };
}
class Student {
    _name;
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
}
__decorate([
    Capitalize,
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], Student.prototype, "name", null);
const s = new Student("tejashvar");
console.log(s.name);
//Parameters based Decorators
function LogParameter(target, propertyKey, parameterIndex) {
    console.log(`Parameter #${parameterIndex} of ${String(propertyKey)} is decorated`);
}
class Examples {
    greet(name) {
        console.log(`Hello, ${name}!`);
    }
}
__decorate([
    __param(0, LogParameter),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], Examples.prototype, "greet", null);
const e = new Examples();
e.greet("Manju");
//Property Decorators with information about the metadata
function logType(target, propertyKey) {
    const type = Reflect.getMetadata("design:type", target, propertyKey);
    console.log(`${propertyKey} type: ${type.name}`);
}
class metadata {
    message = "";
}
__decorate([
    logType,
    __metadata("design:type", String)
], metadata.prototype, "message", void 0);
//# sourceMappingURL=Decorators.js.map