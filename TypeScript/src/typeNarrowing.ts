// Narrowing means: TypeScript starts with a broad type (like string | number) and then “narrows down” to a more specific type based on checks you perform.
// This ensures type safety when working with union types.

function printId(id: string | number) {
  if (typeof id === "string") {
    console.log("String ID:", id);
  } else {
    console.log("Number ID:", id);
  }
}
printId("abc123");
printId(456);
printId(true as any); // Bypassing type check for demonstration

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

function makeSound(pet: Dog | Cat) {
  if (pet instanceof Dog) {
    pet.bark(); // ✅ Dog
  } else {
    pet.meow(); // ✅ Cat
  }
}

const pet = new Dog();
makeSound(pet);

// in
// Checks if a property exists in an object.
type Car = { drive: (message: string) => void };
type Boat = { sail: () => void };

function move(vehicle: Car | Boat) {
  if ("drive" in vehicle) {
    vehicle.drive("Hello"); // ✅ Car
  } else {
    vehicle.sail(); // ✅ Boat
  }
}
const myCar: Car = {
  drive: (msg: string) => console.log("Driving: " + msg),
};
move(myCar);

//User-Defined Type Guards
interface Fish {
  swim: () => void;
}
interface Bird {
  fly: () => void;
}
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}
