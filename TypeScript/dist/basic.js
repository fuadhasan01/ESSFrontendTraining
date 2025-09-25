"use strict";
//TypeScript = JavaScript + Types
Object.defineProperty(exports, "__esModule", { value: true });
//js code
// let username = "Fuad";
// username = 123; //This is allowed in js
//ts code
let username = "Fuad";
//username = 123; // Error: don't convert strign variable to number
console.log(username);
//Basic Types
//String
let PersonName = "Rahim";
//number
let age = 25;
//boolean
let isStudent = true;
//Any
let randomValue = "Hello";
randomValue = 123; //allowed
//Array
let numbers = [1, 2, 3, 4, 5, 6];
let fruits = ["Apple", "Banana", "Pineapple"];
console.log(fruits);
let TempArray = [1, 2, 3, 4, 5, 6];
let NewArray = TempArray.slice();
console.log(NewArray);
let newarray2 = TempArray.slice(2, 4);
//Map
let mappedArray = newarray2.map((item) => item * 2);
console.log(mappedArray);
//Filter
let filteredArray = TempArray.filter((item) => item > 3);
console.log(filteredArray);
//reduce
let sum = TempArray.reduce((acc, curr) => acc + curr, 0);
console.log(sum);
//Split
let sentence = "1,2,3,4,5,6,7";
let splittedArray = sentence.split(",");
console.log(splittedArray);
let sentence2 = "Hello World! Welcome to TypeScript.";
let splittedArray2 = sentence2.split(" ");
console.log(splittedArray2);
//# sourceMappingURL=basic.js.map