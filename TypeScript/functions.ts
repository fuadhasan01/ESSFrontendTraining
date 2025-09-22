// JavaScript
// function add(a, b) {
//   return a + b;
// }

// TypeScript (typed)
function add(a: number, b: number): number {
  return a + b;
}

//assign a function to a variable:
const greet = function (name: string): string {
  return "Hello " + name;
};

console.log(greet("Fuad"));

//Arrow Functions
const greet2 = (name: string): string => {
  return "Hello " + name;
};

// Optional Parameters
// Not all parameters are required. Add ?:

function demo(name: string, title?: string): string {
  return title ? `${title} ${name}` : `Hello ${name}`;
}

console.log(demo("Rahim")); // Hello Rahim
console.log(demo("Rahim", "Mr.")); // Mr. Rahim

//Default Parameters
function demo2(name: string, title: string = "Mr."): string {
  return `${title} ${name}`;
}

console.log(demo2("Rahim")); // Mr. Rahim
console.log(demo2("Rahim", "Khan")); // Mr. Rahim

//Rest Parameters
function sum(...nums: number[]): number {
  return nums.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3, 4)); // 10

//Return Type
function logMessage(msg: string): void {
  console.log(msg);
}
