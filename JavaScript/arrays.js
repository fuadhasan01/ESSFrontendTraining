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