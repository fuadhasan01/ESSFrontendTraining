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
const mixedArray = [1, "Hello", true, null, undefined, { name: "John" }, [1, 2, 3]];
console.log(mixedArray);

//looping array elements
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

cars.forEach(function(car) {
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
const flattened = words.flatMap(word => word.split(" "));
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

