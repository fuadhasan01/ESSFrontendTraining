"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greet(name, title) {
    if (name && title) {
        console.log(`Hello, ${title} ${name}`);
    }
    else if (name) {
        console.log(`Hello, ${name}`);
    }
    else {
        console.log("Hello, Guest");
    }
}
greet();
greet("Fuad");
greet("Fuad", "Mr.");
//# sourceMappingURL=overloads.js.map