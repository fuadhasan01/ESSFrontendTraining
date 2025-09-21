//== (loose equality) vs === (strict equality)
console.log(0 == false);    // true   (0 → false)
console.log(0 === false);   // false  (type difference)
console.log("5" == 5);      // true   (string → number)
console.log("5" === 5);     // false  (string vs number)
console.log(null == undefined); // true  (special case)
console.log(null === undefined); // false
console.log(NaN == NaN);    // false  (NaN never equals anything, including itself)
console.log(NaN === NaN);   // false

//!= vs !==
console.log("5" != 5);   // false ("5" → number)
console.log("5" !== 5);  // true (type difference)

//Boolean with comparison
console.log(true == 1);   // true
console.log(false == 0);  // true
console.log(true == "1"); // true ("1" → number)
console.log(false == "0");// true ("0" → number 0)

//null এবং undefined
console.log(null == 0);  // false
console.log(null < 1);   // true (null → 0 in numeric comparison)
console.log(null <= 0);  // true (null → 0)
console.log(undefined == 0); // false
console.log(undefined < 1);  // false (undefined → NaN)

//String vs Number comparison
console.log("2" > 1);     // true ("2" → number 2)
console.log("02" == 2);   // true
console.log("abc" > 2);   // false ("abc" → NaN)

//String comparison (lexicographic)
console.log("apple" < "banana"); // true (alphabet order)
console.log("2" < "12");         // false (string compare → "2" comes after "1")
console.log("20" > "3");         // false ("2" < "3")

//Weird [] (array) and {} (object)
console.log([] == 0);     // true ([] → "" → 0)
console.log([] == "");    // true
console.log([1] == 1);    // true ([1] → "1" → 1)
console.log([1,2] == "1,2"); // true

console.log({} == "[object Object]"); // false
console.log({} == {});   // false (object compare by reference)

//Special with true/false
console.log(true > false);  // true (1 > 0)
console.log(false < true);  // true
console.log(true >= "0");   // true (true=1, "0"=0)

//Infinity and NaN
console.log(Infinity > 1000);  // true
console.log(-Infinity < -1000);// true
console.log(NaN > 0);          // false
console.log(NaN < 0);          // false
console.log(NaN == NaN);       // false

//Tricky chained comparison
console.log(5 < 6 < 7);   // true  (5<6 → true → 1 < 7 → true)
console.log(7 > 6 > 5);   // false (7>6 → true → 1 > 5 → false)










