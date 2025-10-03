// Narrowing means: TypeScript starts with a broad type (like string | number) and then “narrows down” to a more specific type based on checks you perform.
// This ensures type safety when working with union types.

function printId(id: string | number) {
  if (typeof id === "string") {
    console.log("String ID:", id);
  } else {
    console.log("Number ID:", id);
  }
}
printId("abc123");
printId(456);
printId(true as any); // Bypassing type check for demonstration

//EsLint
let name = "Fuad";
console.log(name);
