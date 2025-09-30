"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greetUser({ name, age = 18, email }) {
    console.log(`Hello ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Email: ${email ?? "Not provided"}`);
}
greetUser({ name: "Fuad" });
//Destructuring directly in parameters vs type narrowing
function printUser({ name, age, email }) {
    if (age) {
        console.log(age + 5); // okay
    }
    // console.log(email.toLowerCase()); // ❌ Error: email might be undefined
    if (email) {
        console.log(email.toLowerCase());
    }
}
function printProfile({ name, address: { city = "Unknown", country = "Unknown" } = {}, }) {
    console.log(`${name} lives in ${city}, ${country}`);
}
printProfile({ name: "Fuad" });
//# sourceMappingURL=parameterDestructuringTricky.js.map