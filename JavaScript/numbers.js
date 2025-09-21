//Numbers
let num1 = 42; // Integer
let num2 = 3.14; // Floating-point number
let num3 = -7; // Negative number
let num4 = 0; // Zero
let num5 = 1e6; // Scientific notation (1 million)
let num6 = NaN; // Not-a-Number
let num7 = Infinity; // Positive infinity
let num8 = -Infinity; // Negative infinity
console.log(num1, num2, num3, num4, num5, num6, num7, num8);

//Number methods
let n = 5.6789;
console.log(n.toFixed(2));  // "5.68" (rounds to 2 decimal places)
console.log(n.toPrecision(4)); // "5.679" (4 significant digits)
console.log(n.toString()); // "5.6789" (convert to string)
//to string with base
console.log(n.toString(2));
//Exponential notation
console.log(n.toExponential(2)); // "5.68e+0" (2 digits after decimal in exponential form)
//ValueOf
console.log(n.valueOf()); // 5.6789 (returns primitive value)

//Conversions to Number
console.log(Number("123")); // 123 (string to number)
console.log(Number("12.34")); // 12.34
console.log(Number("abc")); // NaN (invalid number)
console.log(Number(true)); // 1 (true to 1)
console.log(Number(false)); // 0 (false to 0)
console.log(Number(null)); // 0 (null to 0)
console.log(Number(undefined)); // NaN (undefined to NaN)

//Parsing numbers from strings
console.log(parseInt("100px")); // 100 (stops at non-digit)
console.log(parseFloat("12.34em")); // 12.34
console.log(parseInt("abc")); // NaN (no valid number at start)
console.log(parseFloat("12.34.56")); // 12.34 (stops at second dot) 

//Number Methods on dates
let date = new Date("2023-10-01");
console.log(date.getFullYear()); // 2023
console.log(date.getMonth() + 1); // 10 (months are 0-indexed)
console.log(date.getDate()); // 1
console.log(date.getTime()); // milliseconds since Jan 1, 1970  

//Number. methods
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(123)); // false
console.log(Number.isFinite(123)); // true
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isInteger(123)); // true
console.log(Number.isInteger(12.34)); // false  

//Number Properties
console.log(Number.MAX_VALUE); // Largest representable number
console.log(Number.MIN_VALUE); // Smallest positive representable number
console.log(Number.MAX_SAFE_INTEGER); // Largest safe integer
console.log(Number.MIN_SAFE_INTEGER); // Smallest safe integer
console.log(Number.EPSILON); // Smallest difference between 1 and the next representable number
console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.NEGATIVE_INFINITY); // -Infinity 
console.log(Number.NaN); // NaN

//BigInt
let bigInt1 = BigInt(9007199254741991); // Using BigInt constructor
let bigInt2 = 9007199254741991n; // Using 'n' suffix
console.log(bigInt1, bigInt2);
console.log(bigInt1 + 10n); // BigInt arithmetic
console.log(bigInt2 * 2n);
console.log(bigInt1 === bigInt2); // true
// Mixing BigInt and Number causes error
// console.log(bigInt1 + 10); // Error

//Bitwise operations
let a = 5;  // 0101 in binary
let b = 3;  // 0011 in binary
console.log(a & b);  // 1 (0001) 
console.log(a | b);  // 7 (0111)
console.log(a ^ b);  // 6 (0110)
console.log(~a);     // -6 (inverts bits)
console.log(a << 1); // 10 (1010)
console.log(a >> 1); // 2 (0010)
console.log(a >>> 1);// 2 (0010, zero-fill right shift)