//Simple Assignment (=)
let a = 10;
let b = a = 5;  // Right to left assignment
console.log(a, b); // 5 5

//Addition Assignment (+=)
let x = 5;
x += "5"; 
console.log(x); // "55"  (number + string = string)

let y = 5;
y += true; 
console.log(y); // 6   (true → 1)

let z = "Hello ";
z += 5;
console.log(z); // "Hello 5"

//Subtraction Assignment (-=)
let m = 10;
m -= "5";
console.log(m); // 5 ("5" → number)

let n = 10;
n -= true;
console.log(n); // 9 (true → 1)

let o = "20";
o -= "10";
console.log(o); // 10

//Multiplication Assignment (*=)
let p = 5;
p *= "2";
console.log(p); // 10 ("2" → number)
let q = 5;
q *= false;
console.log(q); // 0 (false → 0)

//Division Assignment (/=)
let r = 10;
r /= "2";
console.log(r); // 5 ("2" → number)
let s = 10;
s /= false;
console.log(s); // Infinity (divide by 0)

//Modulus Assignment (%=)
let t = 10;
t %= 3;
console.log(t);
let u = 10;
u %= "4";
console.log(u); // 2 ("4" → number)

//Exponentiation Assignment (**=)
let v = 2;
v **= 3;
console.log(v); // 8
let w = 2;
w **= "3";
console.log(w);q // 8 ("3" → number)

//Chained Assignment
let c1, c2, c3;
c1 = c2 = c3 = 10 + 5; // Right to left assignment
console.log(c1, c2, c3); // 15 15 15

//Assignment with Expressions
let e1 = 10;
e1 += 5 * 2; // e1 = e1 + (5 * 2)
console.log(e1); // 20
let e2 = 10;
e2 *= 2 + 3; // e2 = e2 * (2 + 3)
console.log(e2); // 50

//Pre/Post Increment with Assignment
let pre = 5;
let post = 5;
let preResult = ++pre; // pre = pre + 1; preResult = pre;
let postResult = post++; // postResult = post; post = post + 1;
console.log(preResult); // 6
console.log(postResult); // 5
console.log(pre); // 6
console.log(post); // 6

//Destructuring Assignment (tricky case)
const [first, second] = [1, 2];
console.log(first); // 1
console.log(second); // 2
const {name: myName, age: myAge} = {name: "Alice", age: 25};
console.log(myName); // "Alice"
console.log(myAge);  // 25

