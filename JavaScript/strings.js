//Strings
let str1 = "Hello";
let str2 = 'World';
let str3 = `Hello, ${str2}!`; // Template literal with interpolation
console.log(str1); // "Hello"
console.log(str2); // 'World'
console.log(str3); // "Hello, World!"

//backlash escape sequences
let str4 = "He said, \\\"It's a beautiful day!\"\nLet's enjoy it.";
console.log(str4);

//6 ways to create strings
let s1 = "Hello";               // Double quotes
let s2 = 'Hello';               // Single quotes
let s3 = `Hello`;               // Backticks (Template literals)
let s4 = new String("Hello");   // String object
let s5 = String(123);          // Using String() function
let s6 = String(true);         // Using String() function

console.log(s1, s2, s3, s4, s5, s6);    

//6 escaping characters
let esc1 = "He said, \"Hello!\""; // Double quote
let esc2 = 'It\'s a sunny day'; // Single quote
let esc3 = "Line1\nLine2"; // New line
let esc4 = "Column1\tColumn2"; // Tab
let esc5 = "Backslash: \\"; // Backslash
let esc6 = "Unicode: \u00A9"; // Unicode character
//backspace (\b) and carriage return (\r) are less commonly used

//interpolation
let name = "Alice";
let age = 30;
let greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting); // "Hello, my name is Alice and I am 30 years old."

//String methods
let sampleStr = "  Hello, World!  ";
console.log(sampleStr.length); // it couts the characters including whitespace
console.log(sampleStr.toUpperCase()); // it converts to uppercase
console.log(sampleStr.toLowerCase()); // it converts to lowercase
console.log(sampleStr.trim()); // it removes whitespace from both ends
console.log(sampleStr.trimStart()); // it removes whitespace from the start
console.log(sampleStr.trimEnd()); // it removes whitespace from the end
console.log(sampleStr.at(7)); // it returns the character at index 7
//Substring search methods
let index = sampleStr.indexOf("World");
if(index !== -1){
    console.log(`"World" found at index: ${index}`);
} else {
    console.log(`"World" not found`);
}
console.log(sampleStr.indexOf("World")); // it returns the index of the first occurrence of "World"
console.log(sampleStr.lastIndexOf("o")); // it returns the index of the last occurrence of "o"
console.log(sampleStr.slice(7, 12)); // it returns the substring from index 7 to 12 (not including 12)
console.log(sampleStr.replace("World", "JavaScript")); // it replaces "World" with "JavaScript"
console.log(sampleStr.split(",")); // it splits the string into an array using "," as the delimiter
console.log(sampleStr.charAt(1)); // it returns the character at index 1
console.log(sampleStr.includes("Hello")); // it checks if "Hello" is in the string
console.log(sampleStr.startsWith("  He")); // it checks if the string starts with "  He"
console.log(sampleStr.endsWith("!  ")); // it checks if the string ends with "!  "
console.log(sampleStr.repeat(2)); // it repeats the string 2 times
console.log(sampleStr.concat(" Let's learn JavaScript.")); // it concatenates another string

//String immutability
let immutableStr = "Hello";
immutableStr[0] = "h"; // This won't change the string
console.log(immutableStr); // "Hello"
immutableStr = "h" + immutableStr.slice(1); // Correct way to change the string
console.log(immutableStr); // "hello"

//String char change at middle
let midStr = "Jello";
midStr = midStr.slice(0, 1) + "a" + midStr.slice(2);

//Difference between slice and substring
let diffStr = "Hello, World!";
console.log(diffStr.slice(7, 12)); // "World"
console.log(diffStr.substring(7, 12)); // "World"
console.log(diffStr.slice(-6, -1)); // "orld"
console.log(diffStr.substring(-6, -1)); // "" 

//String vs String Object
let primitiveStr = "Hello"; // String primitive
let objectStr = new String("Hello"); // String object   
console.log(typeof primitiveStr); // "string"
console.log(typeof objectStr); // "object"
console.log(primitiveStr == objectStr); // true (value comparison)
console.log(primitiveStr === objectStr); // false (type comparis    on)


//String Search Methods
console.log(diffStr.indexOf("o")); // 4
console.log(diffStr.lastIndexOf("o")); // 8
console.log(diffStr.includes("World")); // true
console.log(diffStr.startsWith("Hello")); // true
console.log(diffStr.endsWith("!")); // true
console.log(diffStr.search("World")); // 7 (similar to indexOf but can use regex)
console.log(diffStr.match(/o/g)); // ["o", "o"] (all occurrences of "o")
console.log(diffStr.match(/world/i)); // ["World"] (case-insensitive match)