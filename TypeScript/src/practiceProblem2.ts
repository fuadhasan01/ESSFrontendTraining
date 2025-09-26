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
// function combine(a: number, b: number): number;
// function combine(a: string, b: string): string;

// // 2. Actual implementation
// function combine(a: any, b: any): any {
//   return a + b;
// }

// // Usage
// const result1 = combine(10, 20); // number
// const result2 = combine("Hello, ", "World!"); // string
// const result3 = combine(10, "20"); // ❌ Error, overload mismatch
// console.log(result1, result2, result3);

// type User = { id: number; name: string; role?: string };

// function printUser({ id, name, role = "guest" }: User) {
//   console.log(`${id}-${name}-${role}`);
// }

// printUser({ id: 1, name: "Alice" });
// // printUser({ id: 2, name: "Bob", role: undefined });
// printUser({ id: 3, name: "Charlie", role: "admin" });

// let val: number | string = 10;
// //val = "TS";
// //val = true;
// console.log(val);

// let arr: any[] = [1, "2", true];
// arr.push({ a: 5 });
// console.log(arr[3].a);

// let unknownArr: unknown[] = [1, "2"];
// unknownArr.push(true);
// let x = typeof unknownArr[0] === "number" ? unknownArr[0] + 5 : 0;
// console.log(x);

// function sayHi(name: string | null | undefined) {
//   return "Hi " + (name?.toUpperCase() ?? "Guest");
// }
// console.log(sayHi("Alice"));
// console.log(sayHi(null));

// enum Color {
//   Red,
//   Green = 5,
//   Blue,
// }
// console.log(Color.Red, Color.Green, Color.Blue);
// console.log(Color[6]);

// function identity<T>(arg: T): T {
//   return arg;
// }
// console.log(identity("TS").length);
// console.log(identity(123).length);

// function multiply(a: number, b?: number) {
//   return a * (b ?? 2);
// }
// console.log(multiply(5));
// console.log(multiply(5, 3));
// console.log(multiply(5, 0));
// console.log(multiply(5, undefined));

// interface Product { name: string; price?: number }
// const p: Product = { name: "Book" };
// console.log(p.price + 10);

// enum Direction {
//   Up = "UP",
//   Down = "DOWN",
// }
// console.log(Direction.Up, Direction["Down"]);

// function printId(id: number | string) {
//   if (typeof id === "string") console.log(id.toUpperCase());
//   else console.log(id + 10);
// }
// printId("abc");
// printId(5);

// let a: any = "hello";
// let u: unknown = "world";
// console.log(a.length);
// console.log(typeof u === "string" ? u.length : 0);

// function firstElement<T>(arr: T[]): T | undefined {
//   return arr[0];

// }

// const num = firstElement([1, 2, 3]);
// if (num !== undefined) {
//   console.log(num + 10);
// } else {
//   console.log("No number found");
// }

// const str = firstElement(["a", "b"]);
// if (str !== undefined) {
//   console.log(str.toUpperCase());
// } else {
//   console.log("No string found");
// }
