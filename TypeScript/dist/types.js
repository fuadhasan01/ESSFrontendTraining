"use strict";
//Basic Types
Object.defineProperty(exports, "__esModule", { value: true });
//Number
let age = 21;
let price = 99.5;
//String
let name = "Fuad";
let country = "Bangladesh";
//Boolean
let isPassed = true;
let isLoggedIn = false;
//Any
let data = 10;
data = "Hello";
data = true;
//Array Types
let numbers = [1, 2, 3, 4];
let names = ["Ali", "Sami", "Rafi"];
//Object Types
let student = {
    name: "Rafi",
    age: 20,
    passed: true,
};
//Union Types
//A variable can have more than one possible type.
let id;
id = 101; // number ok
id = "101A"; // string ok
let user1 = 123;
let user2 = "abc123";
//Function Types
// Functions also need types (input and output).
function add(a, b) {
    return a + b;
}
function greet(name) {
    return "Hello, " + name;
}
let example;
example = null;
function sayHello() {
    console.log("Hello");
}
//# sourceMappingURL=types.js.map