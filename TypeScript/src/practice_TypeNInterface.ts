//Practice exercises
// Exercise 1 – IDs
// Create a type alias ID that allows number or string. Make a variable with value 2025, then change to "UIU-2025".
type ID = number | string;
let example: ID = 2025;
example = "UIU-2025";

// Exercise 2 – Product interface
// Create an interface Product with:
// id: number (readonly)
// title: string
// price: number
// discount?: number (optional)
// Make a constant product.

interface Product {
  readonly id: number;
  title: string;
  price: number;
  discount?: number;
}

// Exercise 3 – Function alias
// Create a type alias Formatter for a function that takes a Product and returns string. Implement it (e.g., "Pen - $20").
const product: Product = { id: 1, title: "Pen", price: 20 };
console.log(product);
type Formatter = (p: Product) => string;
const formatProduct: Formatter = (p) => `${p.title} - $${p.price}`;
console.log(formatProduct(product)); // "Pen - $20"

// Exercise 4 – Extend
// Create interface Book with pages: number.
// Create interface EBook that extends Book and adds fileSizeMB: number. Make an EBook.
interface Book {
  pages: number;
}

interface EBook extends Book {
  fileSizeMB: number;
}

let storyBook: EBook = {
  pages: 150,
  fileSizeMB: 10,
};
console.log(storyBook);

// Exercise 5 – Intersection
// Make type Stamp = { createdAt: Date } and type Writer = { author: string }.
// Create type Article = Stamp & Writer & { title: string } and make an object.

type Stamp = { createdAt: Date };
type Writer = { author: string };
type Article = Stamp & Writer & { title: string };

let demoArticle: Article = {
  createdAt: new Date(),
  author: "Fuad Hasan",
  title: "Demo Title",
};
console.log(demoArticle);

// Exercise 6 – Literal union
// Make type Role = "admin" | "user" | "guest".
// Write a function canEdit(role: Role): boolean that returns true only for "admin".

type Role = "admin" | "user" | "guest";

function canEdit(role: Role): boolean {
  if (role === "admin") {
    return true;
  }
  return false;
}

console.log(canEdit("admin"));

// Exercise 7 – Index signature
// Create interface Scores where keys are course names (string) and values are numbers. Fill with a few subjects.

interface Scores {
  [course: string]: number;
}

const demoScores: Scores = {
  Math: 95,
  Physics: 88,
  English: 76,
};

console.log(demoScores);

// Exercise 8 – Discriminated union
// Create type Shape = { kind: "circle", radius: number } | { kind: "rect", w: number, h: number }.
// Write area(s: Shape): number.

type Shape2 =
  | { kind: "circle"; radius: number }
  | { kind: "rect"; w: number; h: number };

function area2(s: Shape2): number {
  if (s.kind === "circle") return Math.PI * s.radius * s.radius;
  else if (s.kind === "rect") return s.w * s.h;
  return 0;
}
