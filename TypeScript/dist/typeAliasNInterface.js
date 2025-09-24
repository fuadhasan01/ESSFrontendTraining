"use strict";
//What is a Type Alias?
//A Type Alias is a custom name for a type. It can be a primitive type, union type, object type, etc.
Object.defineProperty(exports, "__esModule", { value: true });
let id1 = 101;
let id2 = 202;
// Instead of writing {name: string; age: number} again and again, we created a shortcut name → Person.
let p1 = { name: "Alice", age: 25 };
let p2 = { name: "Bob", age: 30 };
let val1 = "Hello";
let val2 = 123;
let val3 = "202"; // also ok
let s1 = "success";
let s2 = "loading";
const p = { id: 10, name: "Sam" };
// p.id = 20; // ❌ error
p.email = "labib.knc@gmail.com";
let add = (x, y) => x + y;
let print = (message) => console.log(message);
print("Hello!");
const pt = [10, 20];
const u = {
    id: 1,
    name: "Kim",
    createdAt: new Date(),
    updatedAt: new Date(),
};
//Why use Type Aliases?
//1. Reusability: Define once, use many times.
//2. Readability: Shorter and clearer names.
//3. Maintainability: Change in one place if needed.
//# sourceMappingURL=typeAliasNInterface.js.map