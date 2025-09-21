//Addition (+)
console.log("Addition examples");   
console.log(2 + 3);        // 5 (normal addition)
console.log("2" + 3);      // "23" (string + number = string)
console.log(2 + true);     // 3  (true = 1)
console.log(2 + false);    // 2  (false = 0)
console.log(2 + null);     // 2  (null = 0)
console.log(2 + undefined); // NaN (undefined → NaN in number context)


//Subtraction (-)
// Subtraction always converts operands to numbers
console.log("Substraction examples");
console.log(5 - 2);       // 3 (normal subtraction)
console.log("5" - 2);     // 3  ("5" → number)
console.log("5" - "2");   // 3
console.log("5" - true);  // 4  (true = 1)
console.log("5" - false); // 5  (false = 0)
console.log("5" - null);  // 5  (null = 0)
console.log("5" - undefined); // NaN

//Multiplication (*)
console.log("Multiplication examples");
console.log("5" * 2);     // 10
console.log("5" * "2");   // 10
console.log("5" * true);  // 5
console.log("5" * false); // 0
console.log("5" * null);  // 0
console.log("5" * undefined); // NaN

//Division (/)
console.log("Division examples");
console.log("10" / 2);    // 5
console.log("10" / "2");  // 5
console.log("10" / true); // 10
console.log("10" / false); // Infinity (divide by 0)
console.log("10" / null);  // Infinity (divide by 0)
console.log("10" / undefined); // NaN

//Modulus (%)
console.log("Modulus examples");
console.log(10 % 3);     // 1
console.log(-10 % 3);    // -1 (sign comes from numerator)
console.log("10" % 4);   // 2  ("10" → number)
console.log(10 % 0);     // NaN (mod 0 not valid)
console.log(0 % 10);     // 0

//Exponentiation (**)
console.log("Exponentiation examples");
console.log(2 ** 3);     // 8
console.log(2 ** "3");   // 8
console.log("2" ** "3"); // 8
console.log(2 ** true);  // 2  (true = 1)
console.log(2 ** false); // 1  (false = 0)
console.log(2 ** null);  // 1  (null = 0)
console.log(2 ** undefined); // NaN

//Increment (++)
// Increases a variable's value by 1
let a = 5;
console.log(a++);   // 5 (post-increment → return old value, then +1)
console.log(a);     // 6
console.log(++a);   // 7 (pre-increment → first add, then return)

//Decrement (--)
// Decreases a variable's value by 1
let b = 5;
console.log(b--);   // 5
console.log(b);     // 4
console.log(--b);   // 3

//Special Cases with NaN & Infinity
console.log(NaN + 1);      // NaN
console.log(NaN * 5);      // NaN
console.log(Infinity + 1); // Infinity
console.log(Infinity - Infinity); // NaN
console.log(0 / 0);        // NaN
console.log(1 / 0);        // Infinity
console.log(-1 / 0);       // -Infinity

//Mixing Boolean, Null, Undefined
console.log("Mixing Boolean, Null, Undefined examples");
console.log(true + true);      // 2
console.log(false - true);     // -1
console.log(null + true);      // 1
console.log(null - false);     // 0
console.log(undefined + 1);    // NaN
