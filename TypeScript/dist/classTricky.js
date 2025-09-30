"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//this in Class Methods
class Counter {
    count = 0;
    increment() {
        this.count++;
    }
}
const counter = new Counter();
const inc = counter.increment();
console.log(typeof inc);
//Parameter Properties + Access Modifiers
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hi, I am ${this.name}`);
        console.log(`Age: ${this.age}`);
    }
}
const p = new Person("Fuad", 25);
console.log(p.name); // ✅ accessible
// console.log(p.age); ❌ private, cannot access outside
p.greet(); // ✅ can access private age inside class method
// Inheritance + super
class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a sound`);
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    speak() {
        super.speak(); // call parent method
        console.log(`${this.name} barks`);
    }
}
const d = new Dog("Rex");
d.speak();
// Static Properties and Methods
class Counter2 {
    static count = 0;
    static increment() {
        Counter2.count++;
    }
}
Counter2.increment();
console.log(Counter2.count); // 1
const c = new Counter2();
Counter2.increment();
console.log(Counter2.count);
// Tricky “this type” + Method Chaining
class Builder {
    value = "";
    set(val) {
        this.value = val;
        return this; // return this for chaining
    }
    print() {
        console.log(this.value);
        return this;
    }
}
const b = new Builder();
const value = b.set("Hello");
b.print();
//# sourceMappingURL=classTricky.js.map