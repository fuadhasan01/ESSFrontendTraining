"use strict";
// JavaScript
// function add(a, b) {
//   return a + b;
// }
Object.defineProperty(exports, "__esModule", { value: true });
// TypeScript (typed)
function add(a, b) {
    return a + b;
}
//assign a function to a variable:
const greet = function (name) {
    return "Hello " + name;
};
console.log(greet("Fuad"));
//Arrow Functions
const greet2 = (name) => {
    return "Hello " + name;
};
// Optional Parameters
// Not all parameters are required. Add ?:
function demo(name, title) {
    return title ? `${title} ${name}` : `Hello ${name}`;
}
console.log(demo("Rahim")); // Hello Rahim
console.log(demo("Rahim", "Mr.")); // Mr. Rahim
//Default Parameters
function demo2(name, title = "Mr.") {
    return `${title} ${name}`;
}
console.log(demo2("Rahim")); // Mr. Rahim
console.log(demo2("Rahim", "Khan")); // Mr. Rahim
//Rest Parameters
function sum(...nums) {
    return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4)); // 10
//Return Type
function logMessage(msg) {
    console.log(msg);
}
//# sourceMappingURL=functions.js.map