// async function sayHello() {
//   await console.log("This is the log inside async function");
//   return "Hello";
// }
// sayHello().then((msg) => console.log(msg));
// console.log("This is Synchronous log");

// function getNumber() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(42), 500);
//   });
// }

// function getRandomNumber() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       let num = Math.random();
//       resolve(num * 100);
//     }, 1000);
//   });
// }
// async function showNumber() {
//   console.log("Fetching...");
//   let num = await getNumber(); // waits 2 seconds
//   let num2 = await getRandomNumber(); // waits 1 seconds
//   console.log("Number is:", num);
//   console.log("Number is:", num2);
// }

// showNumber();

// async function fetchData() {
//   try {
//     let res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//     let data = await res.json();
//     console.log(data.title);
//   } catch (error) {
//     console.log("Error:", error);
//   }
// }

// fetchData();
// console.log("This is fetching examples....");

//Multiple await calls
// async function process() {
//   let user = await fetch("https://jsonplaceholder.typicode.com/users/1");
//   let userData = await user.json();

//   let posts = await fetch(
//     "https://jsonplaceholder.typicode.com/posts?userId=1"
//   );
//   let postsData = await posts.json();

//   console.log("User:", userData.name);
//   console.log("Posts:", postsData.length);
// }

// process();

//Running tasks in parallel
// async function parallel() {
//   let [user, posts] = await Promise.all([
//     fetch("https://jsonplaceholder.typicode.com/users/1").then((r) => r.json()),
//     fetch("https://jsonplaceholder.typicode.com/posts?userId=1").then((r) =>
//       r.json()
//     ),
//   ]);

//   console.log("User:", user.name);
//   console.log("Posts:", posts.length);
// }

// parallel();

// async function foo() {
//   console.log("A");
//   await new Promise((res) => setTimeout(res, 0));
//   console.log("B");
// }

// foo();
// console.log("C");

//Async Function Always Returns a Promise
// async function test() {
//   return 100;
// }

// console.log(test()); // Promise { 100 }
// test().then((res) => console.log(res)); // 100

//Combining async/await with Loops
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function countdown() {
  for (let i = 3; i > 0; i--) {
    console.log(i);
    await delay(1000); // wait 1 sec
  }
  console.log("Go!");
}

countdown();
