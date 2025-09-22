const mySet = new Set();
mySet.add(1);
mySet.add(5);

//Add duplicate values
mySet.add(5);

for (const item of mySet) {
  console.log(item);
}

console.log(typeof mySet); // object

//Set methods
//Size
console.log(mySet.size); // 2

//Has
console.log(mySet.has(1)); // true
console.log(mySet.has(3)); // false

//ForEach
mySet.forEach(function (value) {
  console.log(value);
});

//Values
const iterator = mySet.values();
for (const value of iterator) {
  console.log(value);
}

//Logic methods
//Union
const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);
const union = new Set([...setA, ...setB]);
console.log(union); // Set { 1, 2, 3, 4, 5 }

//Intersection
const intersection = new Set([...setA].filter((x) => setB.has(x)));
console.log(intersection); // Set { 3 }

//Difference
const difference = new Set([...setA].filter((x) => !setB.has(x)));
console.log(difference); // Set { 1, 2 }

//Symmetric Difference
const symmetricDifference = new Set(
  [...setA]
    .filter((x) => !setB.has(x))
    .concat([...setB].filter((x) => !setA.has(x)))
);
console.log(symmetricDifference); // Set { 1, 2, 4, 5 }

//issubetof
const A = new Set(["a", "b", "c"]);
const B = new Set(["b", "c", "d"]);

let answer = A.isSubsetOf(B);
console.log(answer); // false

//Superset
answer = A.isSupersetOf(B);
console.log(answer); // false

//isDisjointFrom
answer = A.isDisjointFrom(B);
console.log(answer); // false

//Clear
mySet.clear();
console.log(mySet); // Set {} array elements with a specified separator
