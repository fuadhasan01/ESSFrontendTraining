let p = Promise.resolve("Hello");
p.then((res) => console.log(res)); // Hello

let p1 = new Promise((resolve) => setTimeout(() => resolve("First"), 1000));
let p2 = new Promise((resolve) => setTimeout(() => resolve("Second"), 2000));

Promise.race([p1, p2]).then((result) => console.log(result)); // First

function getProducts() {
  return new Promise((res) => setTimeout(() => res("✅ Products loaded"), 100));
}

function getUser() {
  return new Promise((res) => setTimeout(() => res("✅ User loaded"), 100));
}

function getOrderStatus() {
  return new Promise((res) => setTimeout(() => res("✅ Order loaded"), 150));
}

Promise.all([getProducts(), getUser(), getOrderStatus()])
  .then((values) => console.log("All Done:", values))
  .catch((err) => console.log("Error:", err));

const a = new Promise((res) => setTimeout(() => res("A"), 1000));
const b = new Promise((_, rej) => setTimeout(() => rej("B-err"), 0));
const c = Promise.resolve("C");

Promise.all([a, b, c])
  .then((vals) => console.log("ALL", vals))
  .catch((err) => console.log("ERR", err));
