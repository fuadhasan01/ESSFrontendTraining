"use strict";
// Parameter destructuring is a way to extract values from objects or arrays directly in a function’s parameter list instead of accessing them inside the function.
// This makes code cleaner and more readable.
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    name: "Fuad",
    age: 25,
    email: "fuad@example.com",
};
//Without destructuring
// function printUser(user: User) {
//   console.log(user.name);
//   console.log(user.age);
//   console.log(user.email);
// }
// printUser(user);
//With parameter destructuring:
function printUser({ name, age, email }) {
    console.log(name);
    console.log(age);
    console.log(email);
}
printUser(user);
//Destructuring Arrays
const numbers = [10, 20, 30];
function sum([a = 0, b = 0, c = 0]) {
    return a + b + c;
}
console.log(sum(numbers));
//Default Values
function printUser2({ name, age, email = "not provided" }) {
    console.log(name);
    console.log(age);
    console.log(email);
}
printUser2({ name: "Fuad", age: 25 });
const userProfile = {
    name: "Fuad",
    address: {
        city: "Dhaka",
        country: "Bangladesh",
        code: 1200,
    },
};
function printAddress({ name, address: { city, country, code } }) {
    console.log(name, city, country, code);
}
printAddress(userProfile); // Fuad Dhaka Bangladesh
//# sourceMappingURL=parameterDestructuring.js.map