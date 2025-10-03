// Declaration Merging means: if you declare multiple things with the same name, TypeScript merges them into a single definition instead of throwing an error.
// Where Declaration Merging Happens
// 1. Interfaces
// 2. Namespaces
// 3. Enums
// 4. Functions / Classes with Namespaces

// 1. Interface Merging
// If two interfaces have the same name, TypeScript merges their members.
interface User {
  id: number;
}

interface User {
  name: string;
}

interface User {
  email?: string;
}

// Merged:
const u: User = {
  id: 1,
  name: "Fuad",
  email: "labib.knc@gmail.com",
};

// 2. Namespace Merging
// Two namespaces with the same name also merge.

namespace MyLib {
  export function greet() {
    console.log("Hello");
  }
}

namespace MyLib {
  export function bye() {
    console.log("Goodbye");
  }
}

// Both available:
MyLib.greet();
MyLib.bye();

// 3. Class + Namespace Merging
// A namespace can be merged with a class, function, or enum to add static members.
class Person {
  constructor(public name: string) {}
}

namespace Person {
  export function createAnonymous() {
    return new Person("Anonymous");
  }
}

const p = Person.createAnonymous();
console.log(p.name); // "Anonymous"

// 4. Enum Merging
// You can spread enum declarations across multiple blocks.
enum Colors {
  Red = "RED",
}

enum Colors {
  Blue = "BLUE",
}

console.log(Colors.Red, Colors.Blue); // "RED" "BLUE"

// 5. Function + Namespace Merging
// A namespace can be merged with a function to add static members.
function makeCounter() {
  let count = 0;
  return {
    increment: () => count++,
    decrement: () => count--,
    getCount: () => count,
  };
}

namespace makeCounter {
  export function createWithInitialValue(initialValue: number) {
    let counter = makeCounter();
    counter.getCount = () => initialValue;
    return counter;
  }
}

const counter1 = makeCounter();
console.log(counter1.getCount()); // 0
counter1.increment();
console.log(counter1.getCount()); // 1

const counter2 = makeCounter.createWithInitialValue(10);
console.log(counter2.getCount()); // 10

//Another Example of function merging
function buildName(firstName: string, lastName?: string): string {
  if (lastName) return firstName + " " + lastName;
  else return firstName;
}
namespace buildName {
  export const version = "1.0.0";
  export function info() {
    return `buildName version: ${version}`;
  }
}
console.log(buildName("Fuad")); // "Fuad"
console.log(buildName.info()); // "buildName version: 1.0.0"
console.log(buildName.version); // "1.0.0"

// When Not to Use Declaration Merging
// Avoid merging declarations when it leads to confusion or conflicts.
// For example, merging two classes with the same name can cause issues.
// Instead, use different names or consider composition over inheritance.

// Summary
// Declaration Merging is a powerful feature in TypeScript that allows you to extend existing types by declaring them multiple times. It works with interfaces, namespaces, classes, functions, and enums. Use it judiciously to enhance code organization and maintainability.
