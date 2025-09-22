//TypeScript = JavaScript + Types

//js code
// let username = "Fuad";
// username = 123; //This is allowed in js

//ts code
let username: string = "Fuad";
//username = 123; // Error: don't convert strign variable to number
console.log(username);

//Basic Types
//String
let PersonName: string = "Rahim";

//number
let age: number = 25;

//boolean
let isStudent: boolean = true;

//Any
let randomValue: any = "Hello";
randomValue = 123; //allowed

//Array
let numbers: number[] = [1, 2, 3, 4, 5, 6];
let fruits: string[] = ["Apple", "Banana", "Pineapple"];

console.log(fruits);
