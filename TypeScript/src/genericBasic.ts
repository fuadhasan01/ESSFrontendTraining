//What is Generics?
//Generics allow you to create reusable components that can work with a variety of types rather than a single one. They provide a way to make components more flexible and type-safe.
//Generics are like functions for types. They allow you to define a placeholder type that can be replaced with a specific type when the component is used.
//Generics are defined using angle brackets <>.
//Benefits of Generics:
//1. Reusability: Write code that works with any data type.
//2. Type Safety: Catch type errors at compile time.
//3. Flexibility: Create components that can adapt to different types.

// A normal (non-generic) identity:
function idString(x: string): string {
  return x;
}

// A generic identity:
function id<T>(x: T): T {
  return x;
}

const a = id<string>("hello"); // T = string
const b = id<number>(42); // T = number
const c = id({ name: "Ava" }); // T = { name: string }

//Generic Function Basic
// 1) Echo back the same value (type-safe)
function echo<T>(value: T): T {
  return value;
}

echo("TS"); // string
echo(99); // number
echo(true); // boolean

// 2) Get the first item from any array
function first<T>(items: T[]): T | undefined {
  return items[0];
}
first([10, 20]); // number | undefined
first(["a", "b"]); // string | undefined

const x = echo("hi"); // x: string
const y = first([1, 2, 3]); // y: number | undefined

console.log(x);
console.log(y);

//Generic Type Aliases & Interfaces
//Box Type
type Box<T> = { value: T };

const box1: Box<number> = { value: 123 };
const box2: Box<string> = { value: "pen" };

//Pair Type (Two Placeholders)
type Pair<A, B> = { first: A; second: B };

const p1: Pair<string, number> = { first: "age", second: 21 };
const p2: Pair<boolean, string> = { first: true, second: "ok" };

//Generic interface for API responses
interface ApiResponse<T> {
  data: T;
  ok: boolean;
  message?: string;
}

type User = { id: number; name: string };

const res: ApiResponse<User> = {
  data: { id: 1, name: "Fuad" },
  ok: true,
};
