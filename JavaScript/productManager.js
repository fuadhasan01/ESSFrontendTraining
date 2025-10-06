// Product class
class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }
}

// Product list
const products = [
  new Product(1, "Laptop", 1200, "Electronics"),
  new Product(2, "Phone", 800, "Electronics"),
  new Product(3, "Book", 20, "Stationery"),
];

// Add new product
function addProduct(product) {
  products.push(product);
  console.log("Added:", product);
}

// Find product by ID
function getProductById(id) {
  return products.find((p) => p.id === id);
}

// Calculate total price
function calculateTotal() {
  return products.reduce((sum, p) => sum + p.price, 0);
}

// Fetch products from fake API
async function fetchProducts() {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  console.log("Fetched:", data.length, "products");
}

// DOM example (just for demo)
function showProducts() {
  const list = document.getElementById("productList");
  list.innerHTML = "";
  products.forEach((p) => {
    const item = document.createElement("li");
    item.textContent = `${p.name} - $${p.price}`;
    list.appendChild(item);
  });
}

// Run some operations
addProduct(new Product(4, "Pen", 5, "Stationery"));
console.log("Total:", calculateTotal());
fetchProducts();
