function helloWorld() {
    console.log("Hello, World!");
}

function add(a, b) {
    return a + b;
}
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}
greet(); // "Hello, Guest!"
greet("Alice"); // "Hello, Alice!"

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}
toCelsius(100); // 37.7778

//invoking the functions
helloWorld(); // Outputs: Hello, World!
console.log(add(5, 3)); // Outputs: 8

//complex function with default parameters and rest parameters
function complexFunction(x, y = 10, ...args) {
    console.log("x:", x);
    console.log("y:", y);
    console.log("args:", args);
    return x + y + args.reduce((acc, val) => acc + val, 0);
}
console.log(complexFunction(5)); // x: 5, y: 10, args: [], returns 15
console.log(complexFunction(5, 20, 1, 2, 3)); // x: 5, y: 20, args: [1,2,3], returns 31

//Arrow function
const multiply = (a, b) => a * b;
console.log(multiply(4, 5)); // Outputs: 20
const square = n => n * n;
console.log(square(6)); // Outputs: 36
const sayHi = () => console.log("Hi!");
sayHi(); // Outputs: Hi!