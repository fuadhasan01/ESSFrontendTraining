// JavaScript
// function add(a, b) {
//   return a + b;
// }

// TypeScript (typed)
function add(a: number, b: number): number {
  return a + b;
}

//assign a function to a variable:
const greet = function (name: string): string {
  return "Hello " + name;
};

console.log(greet("Fuad"));

//Arrow Functions
const greet2 = (name: string): string => {
  return "Hello " + name;
};
