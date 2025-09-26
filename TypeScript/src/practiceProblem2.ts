// function greet(name: string | null | undefined) {
//     return "Hello " + name.toUpperCase();
// }

// console.log(greet("Alice"));
// console.log(greet(null));

// interface Person {
//   name: string;
//   salary: number;
// }
// type Employee = { name: string; salary: number };

// const e: Employee = { name: "John", salary: 5000 };
// const p: Person = e;

// console.log(typeof p);

// function identity<T>(arg: T): T {
//   return arg;
// }

// console.log(identity("Hello").length);
// console.log(identity(42));

// 1. Overload signatures
function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: number, b: string): string;

// 2. Actual implementation
function combine(a: any, b: any): any {
  return a + b;
}

// Usage
const result1 = combine(10, 20); // number
const result2 = combine("Hello, ", "World!"); // string
const result3 = combine(10, "20"); // ❌ Error, overload mismatch
console.log(result1, result2, result3);
