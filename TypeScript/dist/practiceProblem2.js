"use strict";
// function greet(name: string | null | undefined) {
//     return "Hello " + name.toUpperCase();
// }
Object.defineProperty(exports, "__esModule", { value: true });
// 2. Actual implementation
function combine(a, b) {
    return a + b;
}
// Usage
const result1 = combine(10, 20); // number
const result2 = combine("Hello, ", "World!"); // string
const result3 = combine(10, "20"); // ❌ Error, overload mismatch
console.log(result1, result2, result3);
//# sourceMappingURL=practiceProblem2.js.map