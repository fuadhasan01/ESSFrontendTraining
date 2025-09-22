// empty map
let myMap = new Map();

// map with initial values
let myMap2 = new Map([
  ["name", "Rahim"],
  ["age", 25],
  ["city", "Dhaka"],
]);

//set(key, value) → add a key-value pair
myMap.set("country", "Bangladesh");
myMap.set(123, "number key");
myMap.set(true, "boolean key");

//get(key) → get value
console.log(myMap.get("country")); // Bangladesh
console.log(myMap.get(123)); // number key

//has(key) → check if key exists
console.log(myMap.has("age")); // true

//delete(key) → remove one entry
myMap.delete("city");

//clear() → remove all entries
//myMap.clear();

//size → number of entries
console.log(myMap.size);

//For...of
for (let [key, value] of myMap) {
  console.log(key, value);
}
// a 1
// b 2
// c 3

//Using forEach
myMap.forEach((value, key) => {
  console.log(key, "=", value);
});

//Using keys, values, entries
console.log([...myMap.keys()]); // ["a", "b", "c"]
console.log([...myMap.values()]); // [1, 2, 3]
console.log([...myMap.entries()]); // [["a",1],["b",2],["c",3]]

//Word Frequency Counter
let words = ["apple", "banana", "apple", "orange", "banana", "apple"];

let freq = new Map();

for (let w of words) {
  freq.set(w, (freq.get(w) || 0) + 1);
}

console.log(freq);
// Map(3) { 'apple' => 3, 'banana' => 2, 'orange' => 1 }

//Map = A better version of Object when you need flexible keys, guaranteed order, or fast lookups with .size built-in.
