const arrays = [1, 2, 3, 4, 5];

//Type of array
console.log(typeof arrays); // Outputs: object

console.log(arrays.length); // Outputs: 5

//Cars Array
const cars = ["Saab", "Volvo", "BMW"];
console.log(cars);
console.log(cars[0]);

//Convert array to string
console.log(cars.toString());

//Join array elements with a specified separator
console.log(cars.join(" - "));

function addTwoNumbers(a, b) {
  return a + b;
}

//Different Types in an array
//Add function in an array
const funcArray = [1, "Hello", true, addTwoNumbers];
console.log(funcArray);
console.log(funcArray[3](5, 10)); // Outputs: 15
const mixedArray = [
  1,
  "Hello",
  true,
  null,
  undefined,
  { name: "John" },
  [1, 2, 3],
];
console.log(mixedArray);

//looping array elements
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

cars.forEach(function (car) {
  console.log(car);
});

//For...of loop
for (const car of cars) {
  console.log(car);
}

//Array adding elements
cars.push("Audi"); // Adds to the end
console.log(cars);

//Array chekck
console.log(Array.isArray(cars)); // true

//Array Methods
console.log(cars.length); // 4
console.log(cars.toString());
console.log(cars.at(2)); // "BMW"
//Join
console.log(cars.join(" | ")); // "Saab | Volvo | BMW | Audi"
//Pop
console.log(cars.pop()); // "Audi"
console.log(cars);
//Push
cars.push("Audi");
console.log(cars);
//Shift
console.log(cars.shift()); // "Saab"
console.log(cars);
//Unshift
cars.unshift("Saab");
console.log(cars);
//Concat
const moreCars = ["Mercedes", "Toyota"];
const allCars = cars.concat(moreCars);
console.log(allCars);
//CopyWithin
const copyArray = [1, 2, 3, 4, 5];
console.log(copyArray.copyWithin(0, 3)); // [4, 5, 3, 4, 5]
//Flat
const nestedArray = [1, 2, [3, 4], [5, [6, 7]]];
console.log(nestedArray.flat()); // [1, 2, 3, 4, 5, [6, 7]]
console.log(nestedArray.flat(2)); // [1, 2, 3, 4, 5, 6, 7]

//FlatMap
const words = ["Hello World", "JavaScript is fun"];
const flattened = words.flatMap((word) => word.split(" "));
console.log(flattened); // ["Hello", "World", "JavaScript", "is", "fun"]
//Splice
const spliceArray = ["Jan", "March", "April", "June"];
spliceArray.splice(1, 0, "Feb"); // Inserts "Feb" at index 1
console.log(spliceArray); // ["Jan", "Feb", "March", "April", "June"]
spliceArray.splice(4, 1, "May");

//Slice
const sliceArray = ["Jan", "Feb", "March", "April", "May"];
const newArray = sliceArray.slice(1, 4); // ["Feb", "March", "April"]
console.log(newArray);
//Tostring
console.log(sliceArray.toString()); // "Jan,Feb,March,April,May"

//Array Search Methods
console.log(sliceArray.indexOf("March")); // 2
console.log(sliceArray.lastIndexOf("April")); // 3
console.log(sliceArray.includes("adfasf")); // false

//All about array find
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Find the first even number
const firstEven = numbers.find((num, index, numbers) => num === 2);
console.log(firstEven); // Outputs: 2

//Array Find with all parameters used
const firstEvenWithParams = numbers.find((num, index, arr) => {
  console.log(`Index: ${index}, Array: ${arr}`);
  return num % 2 === 0;
});
console.log(firstEvenWithParams); // Outputs: 2

//Find Index
const firstEvenIndex = numbers.findIndex((num) => num % 2 === 0);
console.log(firstEvenIndex); // Outputs: 1

//Find Last
const lastEven = numbers.findLast((num) => num % 2 === 0);
console.log(lastEven); // Outputs: 10

//Find Last Index
const lastEvenIndex = numbers.findLastIndex((num) => num % 2 === 0);
console.log(lastEvenIndex); // Outputs: 9

//Array Sort
const unsortedArray = [40, 100, 1, 5, 25, 10];
unsortedArray.sort();
console.log(unsortedArray); // Outputs: [1, 10, 100, 25, 40, 5]

//String Array Sort
const stringArray = ["Banana", "Apple", "Cherry"];
stringArray.sort();
console.log(stringArray); // Outputs: ["Apple", "Banana", "Cherry"]

//Reverse
stringArray.reverse();
console.log(stringArray); // Outputs: ["Cherry", "Banana", "Apple"]

//Tosorted
const sortedArray = unsortedArray.toSorted();
console.log(sortedArray); // Outputs: [1, 5, 10, 25, 40, 100]
console.log(unsortedArray); // Original array remains unchanged

//Toreveresed
const reversedArray = stringArray.toReversed();
console.log(reversedArray); // Outputs: ["Apple", "Banana", "Cherry"]
console.log(stringArray); // Original array remains unchanged

//Numeric Sort
const numericArray = [40, 100, 1, 5, 25, 10];
numericArray.sort((a, b) => a - b); // how this work? explained below
// Explanation: The compare function (a, b) => a - b sorts the numbers in ascending order.
// If the result is negative, a is sorted before b.
// If the result is positive, b is sorted before a.
// If the result is zero, their order remains unchanged.
console.log(numericArray); // Outputs: [1, 5, 10, 25, 40, 100]

//Decending Order Sort
numericArray.sort((a, b) => b - a);
console.log(numericArray); // Outputs: [100, 40, 25, 10, 5, 1]

//Find the highest and lowest number in an array
const highestNumber = Math.max(...numericArray);
const lowestNumber = Math.min(...numericArray);
console.log(`Highest: ${highestNumber}, Lowest: ${lowestNumber}`); // Outputs: Highest: 100, Lowest: 1

//Array Object
const employees = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Jim", age: 35 },
];
//Sort by age
employees.sort((a, b) => a.age - b.age);
console.log(employees);

//Array Iteration Methods
//ForEach
const array = ["Fuad", "Amin", "Rony"];
array.forEach((value, index, array) => {
  console.log(value);
});

//Map
const numbersMap = [1, 2, 3, 4, 5];
const squaredNumbers = numbersMap.map((num) => num * num);
console.log(squaredNumbers); // Outputs: [1, 4, 9, 16, 25]

//FlatMap
const phrases = ["Hello World", "JavaScript is fun"];
const wordsFlatMap = phrases.flatMap((phrase) => phrase.split(" "));
console.log(wordsFlatMap); // Outputs: ["Hello", "World", "JavaScript", "is", "fun"]

//Filter
const evenNumbers = numbers.filter((num) => num > 6);
console.log(evenNumbers); // Outputs: [7, 8, 9, 10]

//Reduce
//Explanation: The reduce method takes a callback function and an initial value.
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0); // 0 is the initial value
console.log(sum); // Outputs: 55

//Reduce Right
const sumRight = numbers.reduceRight((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

//Every
const allAboveZero = numbers.every((num) => num > 0);
console.log(allAboveZero); // Outputs: true

//Some
const someAboveFive = numbers.some((num) => num > 9);
console.log(someAboveFive); // Outputs: true

//From
const str = "Hello";
const strArray = Array.from(str);
console.log(strArray); // Outputs: ['H', 'e', 'l', 'l', 'o']

//Other way to create array from string
const strArray2 = [...str];
console.log(strArray2); // Outputs: ['H', 'e', 'l', 'l', 'o']

//Array keys
const carArray = ["Saab", "Volvo", "BMW"];
const keys = carArray.keys();
for (const key of keys) {
  console.log(key); // Outputs: 0, 1, 2
}

//Entries
const entries = carArray.entries();
for (const entry of entries) {
  console.log(entry); // Outputs: [0, 'Saab'], [1, 'Volvo'], [2, 'BMW']
}

//With
const withArray = carArray.with(1, "Audirr");
console.log(withArray); // Outputs: ['Saab', 'Audirr', 'BMW']

//Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined); // Outputs: [1, 2, 3, 4, 5, 6]

//Rest Parameter
function sumAll(...args) {
  return args.reduce((acc, val) => acc + val, 0);
}

//Destructuring
const destructureArray = [1, 2, 3];
const [first, second, third] = destructureArray;
console.log(first, second, third); // Outputs: 1 2 3
const [one, , three] = destructureArray;
console.log(one, three); // Outputs: 1 3

//Tricky part of array destructuring
const nestedDestructure = [1, [2, 3], 4];
const [num1, [num2, num3], num4] = nestedDestructure;
console.log(num1, num2, num3, num4); // Outputs: 1 2 3 4
