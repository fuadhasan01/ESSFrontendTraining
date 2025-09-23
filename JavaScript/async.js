async function sayHello() {
  await console.log("This is the log inside async function");
  return "Hello";
}
sayHello().then((msg) => console.log(msg));
console.log("This is Synchronous log");

function getNumber() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(42), 2000);
  });
}

async function showNumber() {
  console.log("Fetching...");
  let num = await getNumber(); // waits 2 seconds
  console.log("Number is:", num);
}

showNumber();
