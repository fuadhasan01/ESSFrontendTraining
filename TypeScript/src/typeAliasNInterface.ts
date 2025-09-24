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
