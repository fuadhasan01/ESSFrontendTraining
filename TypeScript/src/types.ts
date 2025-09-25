//Basic Types

//Number
let age: number = 21;
let price: number = 99.5;

//String
let name: string = "Fuad";
let country: string = "Bangladesh";

//Boolean
let isPassed: boolean = true;
let isLoggedIn: boolean = false;

//Any
let data: any = 10;
data = "Hello";
data = true;

//Array Types
let numbers: number[] = [1, 2, 3, 4];
let names: string[] = ["Ali", "Sami", "Rafi"];

//Object Types
let student: { name: string; age: number; passed: boolean } = {
  name: "Rafi",
  age: 20,
  passed: true,
};

//Union Types
//A variable can have more than one possible type.
let id: string | number;

id = 101; // number ok
id = "101A"; // string ok

//Type Aliases
// You can create your own custom type.
type UserID = string | number;

let user1: UserID = 123;
let user2: UserID = "abc123";

//Function Types
// Functions also need types (input and output).
function add(a: number, b: number): number {
  return a + b;
}

function greet(name: string): string {
  return "Hello, " + name;
}

//Special Types
type test = string | null;
let example: test;
example = null;
function sayHello(): void {
  console.log("Hello");
}

let undifinedType: undefined = undefined;
// undifinedType = "Test"; //It can't carry any type other than undefined

let val: {} = "Hello"; // {} can hold any non-primitive type
val = 2; // {} can hold any non-primitive type

let val2: object = { name: "Fuad" }; // object can hold only non-primitive types
// val2 = 3; // ❌ error
val2 = [1, 2, 3]; // ok
console.log(val2);
