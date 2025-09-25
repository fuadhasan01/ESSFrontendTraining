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
const prod = { id: 1, title: "Pen", price: 20 };
prod.id = 2;
const myCar = { vin: "1HGBH41JXMN109186", model: "Civic", year: 2020 };
// myCar.vin = "NEWVIN"; // ❌ Error: cannot modify readonly property
myCar.color = "Red"; // ok
const calc = {
    add: (x, y) => x + y,
    subtract: (x, y) => x - y,
};
console.log(calc.add(5, 3)); // 8
const logger = {
    logInfo: (msg) => console.log("Info: " + msg),
    logError: (err) => console.error("Error: " + err),
};
logger.logInfo("Application started");
const d = {
    name: "Buddy",
    bark: () => console.log("woof"),
};
const labels = { en: "Hello", bn: "হ্যালো" };
class Car2 {
    speed = 0;
    drive(km) {
        this.speed += km;
    }
}
const box = { width: 100, height: 50, color: "blue" };
const cb = { width: 10, height: 20, color: "red" };
const cmp1 = (a, b) => a - b;
const cmp2 = (a, b) => a - b;
function area(s) {
    switch (s.kind) {
        case "square":
            return s.size * s.size;
        case "rectangle":
            return s.width * s.height;
        case "circle":
            return Math.PI * s.radius * s.radius;
    }
}
const scoreBoard = {
    Robin: 50,
    Alice: 80,
};
//# sourceMappingURL=typeAliasNInterface.js.map