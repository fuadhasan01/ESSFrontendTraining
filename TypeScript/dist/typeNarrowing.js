"use strict";
// Narrowing means: TypeScript starts with a broad type (like string | number) and then “narrows down” to a more specific type based on checks you perform.
// This ensures type safety when working with union types.
Object.defineProperty(exports, "__esModule", { value: true });
function printId(id) {
    if (typeof id === "string") {
        console.log("String ID:", id);
    }
    else {
        console.log("Number ID:", id);
    }
}
printId("abc123");
printId(456);
printId(true); // Bypassing type check for demonstration
//EsLint
let name = "Fuad";
console.log(name);
class Dog {
    bark() {
        console.log("Woof");
    }
}
class Cat {
    meow() {
        console.log("Meow");
    }
}
function makeSound(pet) {
    if (pet instanceof Dog) {
        pet.bark(); // ✅ Dog
    }
    else {
        pet.meow(); // ✅ Cat
    }
}
const pet = new Dog();
makeSound(pet);
function move(vehicle) {
    if ("drive" in vehicle) {
        vehicle.drive("Hello"); // ✅ Car
    }
    else {
        vehicle.sail(); // ✅ Boat
    }
}
const myCar = {
    drive: (msg) => console.log("Driving: " + msg),
};
move(myCar);
function isFish(pet) {
    return pet.swim !== undefined;
}
//# sourceMappingURL=typeNarrowing.js.map