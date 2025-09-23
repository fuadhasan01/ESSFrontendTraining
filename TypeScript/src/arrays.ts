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
