//Basic Array
let scores: number[] = [10, 20, 30];

//Declare array
//Using type[]
let nums: number[] = [1, 2, 3];
let names: string[] = ["Ali", "Rafi", "Sadia"];

//Using Array<type>
let nums2: Array<number> = [4, 5, 6];
let flags: Array<boolean> = [true, false, true];

//Getting & Setting Values
let cities: string[] = ["Dhaka", "Chittagong", "Sylhet"];
cities[1] = "Chattogram"; // update
console.log(cities[0]); // "Dhaka"
console.log(cities.length); // 3

// Add / Remove Items (Mutating)
let arr = [1, 2, 3];

arr.push(4); // [1,2,3,4]  (add at end)
arr.pop(); // [1,2,3]    (remove last)
arr.unshift(0); // [0,1,2,3]  (add at start)
arr.shift(); // [1,2,3]    (remove first)

let letters = ["a", "b", "c", "d"];
letters.splice(1, 2); // remove 2 from index 1 → ["a","d"]
letters.splice(1, 0, "x", "y"); // insert at index 1 → ["a","x","y","d"]

//Copy Without Changing Original (Non-Mutating)
const original = [1, 2, 3];
const copy1 = [...original]; // spread
const copy2 = original.slice(); // slice

console.log(copy1, copy2);

// Looping Over Arrays
const nums3: number[] = [2, 4, 6];
for (const n of nums3) {
  console.log(n);
}

nums3.forEach((val) => console.log(val));

//Powerful Methods (Non-Mutating)

// map → transform each item
const base: number[] = [1, 2, 3, 4, 5, 6];
const squares: number[] = base.map((x) => x * x); // [1,4,9]

//filter → keep some items
const evens: number[] = base.filter((x) => x % 2 === 0); // [2]
console.log(evens);

//find & findIndex
const names2: string[] = ["Ava", "Mina", "Nila"];
const firstWithA: any = names2.find((n) => n.startsWith("A")); // "Ava" | undefined
const idx: number = names.findIndex((n) => n === "Mina"); // 1

//some & every
[1, 2, 3].some((n) => n > 2); // true (at least one)
[1, 2, 3].every((n) => n > 0); // true (all)

// includes & indexOf
["a", "b", "c"].includes("b"); // true
["a", "b", "c"].indexOf("x"); // -1

// reduce → combine to one value
const total = [10, 15, 5].reduce((sum, n) => sum + n, 0); // 30
const avg = total / 3; // 10

//Arrays of Objects
type Student = { name: string; age: number; passed: boolean };

const students: Student[] = [
  { name: "Rafi", age: 20, passed: true },
  { name: "Maya", age: 19, passed: false },
];

const passedOnly = students.filter((s) => s.passed); // Student[]
const namesOnly = students.map((s) => s.name); // string[]

console.log(namesOnly);

//Union Arrays vs. Array Unions (Important!)
let mixed: (number | string)[] = [1, "two", 3]; // ok
let oneType: number[] | string[];

oneType = [1, 2]; // ok
oneType = ["a", "b"]; // ok
// oneType = [1, "a"];    // ❌ not allowed

// Tuples (Fixed shape arrays)
let userTuple: [string, number, boolean] = ["Rafi", 20, true];
// userTuple = [20, "Rafi"]; // ❌ wrong order

//Readonly Arrays (Protect from changes)
const days: readonly string[] = ["Sat", "Sun", "Mon"];
// days.push("Tue"); // ❌ Error: readonly

const grid: number[][] = [
  [1, 2],
  [3, 4],
];

//Practice Exercise
//Create fruits: string[] with "mango","banana","apple".
const fruits: string[] = ["mango", "banana", "apple"];

//From const nums = [5, 8, 12, 3, 9], make a new array bigs with numbers >= 8.
const nums4 = [5, 8, 12, 3, 9];
const newnums4 = nums4.filter((num) => num >= 8);
console.log(newnums4);

//Make ids: (number | string)[] and store 101, "A12", 202, "B09".

const ids: (number | string)[] = [101, "A12", 202, "B09"];

type Book = { title: string; price: number; inStock: boolean };

const books: Book[] = [
  { title: "Kothao Keu Nei", price: 500, inStock: true },
  { title: "Opekkha", price: 560, inStock: false },
];

const inStockBooks: any = books.filter((book) => book.inStock);

// Write doubleAll function that takes number[] and returns a new number[] with each value ×2 (use map).
function doubleAll(nums: number[]): number[] {
  return nums.map((num) => num * 2);
}

// Use reduce to sum prices = [120, 80, 150]. Save to total.
const prices: number[] = [120, 80, 150];

prices.reduce(function (total, price) {
  return (total += price);
}, 0);

// Create a tuple cityInfo: [string, number] for ("Dhaka", 21000000).

const cityInfo: [string, number] = ["Dhaka", 21000000];

//Make const statuses: readonly string[] = ["new", "processing", "done"]. Try to push("archived")—what happens and why?
//it will give error because if we define an array as readonly we can't push anything to this

//Create matrix: number[][] for a 2×3 matrix. Change the middle element to 999
const matrix: number[][] = [
  [1, 2, 3],
  [4, 999, 6],
];

//Make onlyStrings: string[] | number[]. Assign strings first, then try to assign [1, "two"]. Is it allowed? Why?

//No its not allowed because onlyStrings can be only string full or full number. It's to allow to asign mix values in this
