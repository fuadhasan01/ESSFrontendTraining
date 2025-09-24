"use strict";
//What is Generics?
//Generics allow you to create reusable components that can work with a variety of types rather than a single one. They provide a way to make components more flexible and type-safe.
//Generics are like functions for types. They allow you to define a placeholder type that can be replaced with a specific type when the component is used.
//Generics are defined using angle brackets <>.
//Benefits of Generics:
//1. Reusability: Write code that works with any data type.
//2. Type Safety: Catch type errors at compile time.
//3. Flexibility: Create components that can adapt to different types.
Object.defineProperty(exports, "__esModule", { value: true });
// A normal (non-generic) identity:
function idString(x) {
    return x;
}
// A generic identity:
function id(x) {
    return x;
}
const a = id("hello"); // T = string
const b = id(42); // T = number
const c = id({ name: "Ava" }); // T = { name: string }
//Generic Function Basic
// 1) Echo back the same value (type-safe)
function echo(value) {
    return value;
}
echo("TS"); // string
echo(99); // number
echo(true); // boolean
// 2) Get the first item from any array
function first(items) {
    return items[0];
}
first([10, 20]); // number | undefined
first(["a", "b"]); // string | undefined
const x = echo("hi"); // x: string
const y = first([1, 2, 3]); // y: number | undefined
console.log(x);
console.log(y);
const box1 = { value: 123 };
const box2 = { value: "pen" };
const p1 = { first: "age", second: 21 };
const p2 = { first: true, second: "ok" };
const res = {
    data: { id: 1, name: "Fuad" },
    ok: true,
};
//# sourceMappingURL=genericBasic.js.map