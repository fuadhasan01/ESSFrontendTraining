"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
//Class Decorators
function Logger(constructor) {
    console.log("This class was created:", constructor.name);
}
let User = class User {
    name;
    constructor(name) {
        this.name = name;
    }
};
User = __decorate([
    Logger,
    __metadata("design:paramtypes", [String])
], User);
//Property Decorator
function ReadOnly(target, propertyKey) {
    Object.defineProperty(target, propertyKey, {
        writable: false,
    });
}
class Person {
    name = "Fuad";
}
__decorate([
    ReadOnly,
    __metadata("design:type", String)
], Person.prototype, "name", void 0);
const p = new Person();
// p.name = "Labib"; ❌ Error: cannot change
console.log(p.name); // Fuad
//Method Decorator
function LogMethod(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`Method ${propertyKey} called with args:`, args);
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
    LogMethod,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Number)
], Calculator.prototype, "add", null);
const calc = new Calculator();
console.log(calc.add(2, 3)); // Logs method call and result
console.log(calc.add(5, 7)); // Logs method call and result
//# sourceMappingURL=decorator.js.map