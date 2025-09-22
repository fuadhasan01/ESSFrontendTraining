console.log("Start");

setTimeout(demoFunction, 100);

function demoFunction() {
  console.log("This is the demo function");
}

console.log("End");

let myPromise = new Promise(function (resolve, reject) {
  let success = false;

  if (success) {
    resolve("✅ Work Done");
  } else {
    reject("❌ Work Fail!");
  }
});

myPromise
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("Promise has done!!");
  });

let wait = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("The work has been done after 3 sec");
  }, 1000);
});

wait.then((msg) => console.log(msg));

new Promise((resolve, reject) => {
  resolve(5);
})
  .then((num) => {
    console.log(num); // 5
    return num * 2;
  })
  .then((num) => {
    console.log(num); // 10
    return num * 3;
  })
  .then((num) => {
    console.log(num); // 30
  });
