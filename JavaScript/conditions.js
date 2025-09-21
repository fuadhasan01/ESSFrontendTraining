//Conditions
let age = 20;

// if statement
if (age >= 18) {
    console.log("You are an adult.");
}

// if-else statement
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

// if-else if-else statement
if (age < 13) {
    console.log("You are a child.");
}

else if (age < 20) {
    console.log("You are a teenager.");
}

else {
    console.log("You are an adult.");
}

// Nested if statement
let num = 10;
if (num > 0) {
    if (num % 2 === 0) {
        console.log("The number is a positive even number.");
    } else {
        console.log("The number is a positive odd number.");
    }
} else {
    console.log("The number is not positive.");
}

// Switch statement
let day = 3;
let dayName;
switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}

console.log("Day " + day + " is " + dayName);

// Ternary operator
let isMember = true;
let discount = isMember ? 0.1 : 0.05;
console.log("Discount: " + (discount * 100) + "%");

// Nested ternary operator
let score = 85;
let grade = score >= 90 ? 'A' :
            score >= 80 ? 'B' :
            score >= 70 ? 'C' :
            score >= 60 ? 'D' : 'F';
console.log("Grade: " + grade);

// Comparison oddities in JavaScript
//Equality
console.log(5 == "5");  // true ("5" → number)
console.log(5 === "5"); // false (type difference)
console.log(null == undefined); // true (both null and undefined are considered equal)
console.log(null === undefined); // false (type difference) 
console.log(NaN == NaN); // false (NaN is not equal to anything, including itself)
console.log(NaN === NaN); // false
console.log(0 == false); // true (false → 0)
console.log(0 === false); // false (type difference)
console.log("" == false);
console.log("" === false);
console.log(" \t\n" == 0); // true (whitespace string → 0)
console.log(" \t\n" === 0); // false (type difference)

//Relational Comparison
console.log("2" > 1); // true ("2" → number)
console.log("02" == 2); // true ("02" → number)
console.log("abc" > 2); // false ("abc" → NaN)


//Chained comparisons
console.log(5 < 6 < 7); // true (5<6 → true → 1 < 7 → true)
console.log(7 > 6 > 5); // false (7>6 → true → 1 > 5 → false)


//Logical Operators
console.log(true || false); // true
console.log(true && false); // false
console.log(false || "Hello"); // "Hello"


