"use strict";
// let a: any = 10;
// let b: unknown = "10";
Object.defineProperty(exports, "__esModule", { value: true });
// console.log(a + a); // 20
// console.log((b as number) + a); // 20
// console.log(typeof (b as number)); // number
// // 20
// // "1010"
// // string
// let arr: (number | string)[] = [1, "2", 3];
// arr.push("4");
// arr.push(5);
// console.log(typeof null);
// console.log(typeof undefined);
// enum Status {
//   Success = 1,
//   Fail,
//   Pending = 5,
//   Done,
// }
// console.log(Status.Success, Status.Fail); // ?
// console.log(Status.Pending, Status.Done); // ?
// console.log(Status[2]); // ?
// console.log(Status["5"]);
// function wrap<T>(value: T): T[] {
//   return [value, value];
// }
// let result1: string[] = wrap<string>("Hi");
// let result2 = wrap(10);
// let arr: (number | string)[] = [1, "2", 3];
// arr.push("4");
// arr.push(5);
// console.log(arr.length); // 5
// console.log(arr[1] + arr[3]); // "24"
// function identity<T>(value: T): T {
//   return value;
// }
// let a = identity<string>("10");
// let b = identity<number>(10);
// console.log(typeof a, typeof b); // ?
// console.log(a + b); // ?
// function wrap<T = string>(x: T): T[] {
//   return [x];
// }
// let res1 = wrap("hello");
// let res2 = wrap(123);
// console.log(typeof res1[0] === "string" ? res1[0].toUpperCase() : ""); // ?
// console.log(typeof res2[0] === "number" ? res2[0].toFixed(2) : ""); // ?
// function combine<T>(a: T, b: T) {
//   return [a, b];
// }
// let c1 = combine("Hi", "TS");
// let c2 = combine(5, 10);
// // let c3 = combine("Hi", 5); // ❌ Compile error
// console.log(c1.join("-")); // ?
// console.log(c2.reduce((x, y) => x + y)); // ?
function lengthOf(item) {
    return item.length;
}
console.log(lengthOf("Hello")); // ?
console.log(lengthOf([1, 2, 3])); // ?
console.log(lengthOf({ length: 10 })); // ?
//# sourceMappingURL=practiceProblem.js.map