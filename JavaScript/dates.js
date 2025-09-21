//Javascript Date and Time
const now = new Date();
console.log(now); // Current date and time

//Createing Date object 9 ways
const date1 = new Date(); // Current date and time
const date2 = new Date(2023, 9, 22); // October 22, 2023 (months are 0-indexed)
const date3 = new Date("2023-10-22"); // ISO format
const date4 = new Date("October 22, 2023 10:00:00"); // Long format
const date5 = new Date(1697952000000); // Timestamp (milliseconds since Jan 1, 1970)
const date6 = new Date(Date.now()); // Current date and time using timestamp
const date7 = new Date("2023-10-22T10:00:00Z"); // UTC format
const date8 = new Date("2023-10-22T10:00:00+05:30"); // With timezone offset
const date9 = new Date("2023-10-22T10:00:00.000Z"); // With milliseconds
console.log(date1, date2, date3, date4, date5, date6, date7, date8, date9);

//Getting Date components
console.log("Year: " + now.getFullYear());
console.log("Month: " + (now.getMonth() + 1)); // Months are 0-indexed
console.log("Date: " + now.getDate());
console.log("Day: " + now.getDay());    // 0 (Sun) to 6 (Sat)
console.log("Hours: " + now.getHours());
console.log("Minutes: " + now.getMinutes());
console.log("Seconds: " + now.getSeconds());
console.log("Milliseconds: " + now.getMilliseconds());
console.log("Timestamp: " + now.getTime()); // Milliseconds since Jan 1, 1970

//Setting Date components
let customDate = new Date("2023-01-01T00:00:00");
customDate.setFullYear(2024);
customDate.setMonth(11); // December (0-indexed)
customDate.setDate(25);
customDate.setHours(10);
customDate.setMinutes(30);
customDate.setSeconds(45);
console.log("Custom Date after setting components: " + customDate);