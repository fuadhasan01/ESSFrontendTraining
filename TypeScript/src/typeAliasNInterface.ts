//What is a Type Alias?
//A Type Alias is a custom name for a type. It can be a primitive type, union type, object type, etc.

//Example 1:
type UserID = number;

let id1: UserID = 101;
let id2: UserID = 202;

// same as writing "let id1: number"

//Type Alias with Objects
type Person = {
  name: string;
  age: number;
};

// Instead of writing {name: string; age: number} again and again, we created a shortcut name → Person.
let p1: Person = { name: "Alice", age: 25 };
let p2: Person = { name: "Bob", age: 30 };

//Type Alias with Union Types
type StringOrNumber = string | number;

let val1: StringOrNumber = "Hello";
let val2: StringOrNumber = 123;
let val3: StringOrNumber = "202"; // also ok

//String literal unions (fixed choices)
type Status = "success" | "error" | "loading";
let s1: Status = "success";
let s2: Status = "loading";
// let s3: Status = "failed"; ❌ not allowed

//Optional(?)
type Profile = {
  id: number;
  email?: string; // optional
  name: string;
};

const p: Profile = { id: 10, name: "Sam" };
// p.id = 20; // ❌ error
p.email = "labib.knc@gmail.com";

//Type Alias with Functions
type MathOperation = (a: number, b: number) => number;
let add: MathOperation = (x, y) => x + y;

type PrintString = (msg: string) => void;

let print: PrintString = (message) => console.log(message);
print("Hello!");

//Tuple with alias
type Point2D = [number, number];
const pt: Point2D = [10, 20];

// Intersections (&) — combine shapes
type Timestamps = { createdAt: Date; updatedAt: Date };
type BaseUser = { id: number; name: string };

type UserWithTime = BaseUser & Timestamps;

const u: UserWithTime = {
  id: 1,
  name: "Kim",
  createdAt: new Date(),
  updatedAt: new Date(),
};

//Why use Type Aliases?
//1. Reusability: Define once, use many times.
//2. Readability: Shorter and clearer names.
//3. Maintainability: Change in one place if needed.

//INTERFACES
//What is an Interface?
//An Interface is a way to define the shape of an object. It is similar to a type alias for object types but has some additional features.

//Describe the shape of an object.
interface Product {
  id: number;
  title: string;
  price: number;
}

const prod: Product = { id: 1, title: "Pen", price: 20 };
prod.id = 2;

//Optional & Readonly in interfaces
interface Car {
  readonly vin: string; // cannot be changed after assignment
  model: string;
  year: number;
  color?: string; // optional
}
const myCar: Car = { vin: "1HGBH41JXMN109186", model: "Civic", year: 2020 };
// myCar.vin = "NEWVIN"; // ❌ Error: cannot modify readonly property
myCar.color = "Red"; // ok

//Interface with Functions
interface Calculator {
  add(a: number, b: number): number;
  subtract(a: number, b: number): number;
}
const calc: Calculator = {
  add: (x, y) => x + y,
  subtract: (x, y) => x - y,
};
console.log(calc.add(5, 3)); // 8

//Methods in Interfaces
interface Logger {
  logInfo(message: string): void;
  logError(error: string): void;
}
const logger: Logger = {
  logInfo: (msg) => console.log("Info: " + msg),
  logError: (err) => console.error("Error: " + err),
};
logger.logInfo("Application started");

//Extending interfaces
interface Animal {
  name: string;
}

interface Dog extends Animal {
  bark(): void;
}

const d: Dog = {
  name: "Buddy",
  bark: () => console.log("woof"),
};

//Index signatures (dictionary-like)
interface StringMap {
  [key: string]: string;
}

const labels: StringMap = { en: "Hello", bn: "হ্যালো" };

//Class implements interface
interface Drivable {
  speed: number;
  drive(km: number): void;
}

class Car2 implements Drivable {
  speed = 0;
  drive(km: number) {
    this.speed += km;
  }
}

//Merging interfaces
interface Box {
  width: number;
  height: number;
}
interface Box {
  color: string;
}
const box: Box = { width: 100, height: 50, color: "blue" };

//Mix of Type Alias AND Interface
interface Box {
  width: number;
  height: number;
}
type Colored = { color: string };

type ColoredBox = Box & Colored;

const cb: ColoredBox = { width: 10, height: 20, color: "red" };

// Function types: alias vs interface
type Comparator = (a: number, b: number) => number;

interface Compare {
  (a: number, b: number): number;
}

const cmp1: Comparator = (a, b) => a - b;
const cmp2: Compare = (a, b) => a - b;

//Discriminated union (powerful pattern)
interface Square {
  kind: "square";
  size: number;
}
interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}

interface Circle {
  kind: "circle";
  radius: number;
}
type Shape = Square | Rectangle | Circle;

function area(s: Shape): number {
  switch (s.kind) {
    case "square":
      return s.size * s.size;
    case "rectangle":
      return s.width * s.height;
    case "circle":
      return Math.PI * s.radius * s.radius;
  }
}
