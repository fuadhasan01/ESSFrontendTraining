//== vs ===
// == checks for value equality with type coercion and === checks for both value and type equality
console.log(0 == false);   // true
console.log(0 === false);  // false
console.log("5" == 5);     // true
console.log("5" === 5);    // false

//+ operator with string & number
// When one operand is a string, + performs string concatenation
console.log(1 + "2");    // "12"
console.log("2" + 1);    // "21"
console.log(1 + 2 + "3"); // "33"
console.log("3" + 1 + 2); // "312"

//Unary + Operator
// Converts its operand to a number
console.log(+"100");  // 100 (string → number)
console.log(+true);   // 1
console.log(+false);  // 0
console.log(+"abc");  // NaN
console.log(+null);   // 0
console.log(+undefined); // NaN
console.log(+{});     // NaN

//|| (OR) vs && (AND)
// || returns the first truthy value or the last value if none are truthy
// && returns the first falsy value or the last value if none are falsy
console.log(true || false); // true
console.log(true && false); // false
console.log(false || "Hello"); // "Hello"
console.log("Hi" && false);  // false
console.log(null || 0); // 0

//?? (Nullish Coalescing Operator)
// Returns the right-hand operand when the left-hand operand is null or undefined
console.log(null ?? "default"); // "default"
console.log(undefined ?? "default"); // "default"
console.log(0 ?? "default"); // 0

//Ternary Operator inside tricky cases
let x = 5;
console.log(x > 10 ? "Big" : x > 3 ? "Medium" : "Small"); // Output: "Medium"
console.log(x > 10 ? (x > 5 ? "Big" : "Medium") : "Small"); // Output: "Small"

//Weird typeof
console.log(typeof null);      // "object" (bug in JS)
console.log(typeof NaN);       // "number"
console.log(typeof function(){}); // "function"
console.log(typeof []);        // "object"

