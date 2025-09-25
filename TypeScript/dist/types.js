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
let undifinedType = undefined;
// undifinedType = "Test"; //It can't carry any type other than undefined
let val = "Hello"; // {} can hold any non-primitive type
val = 2; // {} can hold any non-primitive type
let val2 = { name: "Fuad" }; // object can hold only non-primitive types
// val2 = 3; // ❌ error
val2 = [1, 2, 3]; // ok
console.log(val2);
let scores = {
    Alice: 90,
    Bob: 85,
};
scores["Charlie"] = 88; // ok
// scores["David"] = "A"; // ❌ error, value must be number
console.log(scores);
let move;
move = "up"; // ok
let name2;
name2 = "Fuad"; // ok
name2 = null; // ok
//Tuples
// A Tuple is a fixed-length array with specified types for each element.
let point = [10, 20]; // [x, y]
let userInfo = ["Alice", 30, true]; // [name, age, isMember]
//# sourceMappingURL=types.js.map