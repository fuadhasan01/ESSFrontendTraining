// console.log("Start");

// // Simulate a slow operation (like getting data)
// function getDataSync() {
//   // This loop just wastes time — simulating something slow
//   const start = Date.now();
//   while (Date.now() - start < 2000) {
//     // do nothing for 5 seconds
//   }
//   //return "Data received!";
// }

// getDataSync();

// console.log("End");

// console.log("Start");

// function getDataAsync() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Data received!");
//     }, 5000);
//   });
// }

// getDataAsync().then((result) => {
//   console.log(result);
// });

// console.log("End");

console.log("Start");

function getDataAsync() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data received!");
    }, 5000); // wait 5 seconds
  });
}
// Using .then() instead of await
getDataAsync().then((result) => {
  console.log(result);
});

console.log("End ");
