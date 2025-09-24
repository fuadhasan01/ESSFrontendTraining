"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let example = 2025;
example = "UIU-2025";
// Exercise 3 – Function alias
// Create a type alias Formatter for a function that takes a Product and returns string. Implement it (e.g., "Pen - $20").
const product = { id: 1, title: "Pen", price: 20 };
console.log(product);
const formatProduct = (p) => `${p.title} - $${p.price}`;
console.log(formatProduct(product)); // "Pen - $20"
let storyBook = {
    pages: 150,
    fileSizeMB: 10,
};
console.log(storyBook);
let demoArticle = {
    createdAt: new Date(),
    author: "Fuad Hasan",
    title: "Demo Title",
};
console.log(demoArticle);
function canEdit(role) {
    if (role === "admin") {
        return true;
    }
    return false;
}
console.log(canEdit("admin"));
const demoScores = {
    Math: 95,
    Physics: 88,
    English: 76,
};
console.log(demoScores);
function area2(s) {
    if (s.kind === "circle")
        return Math.PI * s.radius * s.radius;
    else if (s.kind === "rect")
        return s.w * s.h;
    return 0;
}
//# sourceMappingURL=practice_TypeNInterface.js.map