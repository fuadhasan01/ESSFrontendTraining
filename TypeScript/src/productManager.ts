// Product class
interface IProduct {
  id: number;
  name: string;
  price: number;
  category: string;
}

class Product implements IProduct {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public category: string
  ) {}
}

// Product list
const products: IProduct[] = [
  new Product(1, "Laptop", 1200, "Electronics"),
  new Product(2, "Phone", 800, "Electronics"),
  new Product(3, "Book", 20, "Stationery"),
];

// Add new product
function addProduct(product: IProduct) {
  products.push(product);
  console.log("Added:", product);
}

// Find product by ID
function getProductById(id: number): IProduct | undefined {
  return products.find((p) => p.id === id);
}

// Calculate total price
function calculateTotal(): number {
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
  const list: HTMLUListElement | null = document.getElementById(
    "productList"
  ) as HTMLUListElement;
  if (list) {
    list.innerHTML = "";
    products.forEach((p) => {
      const item = document.createElement("li");
      item.textContent = `${p.name} - $${p.price}`;
      list.appendChild(item);
    });
  }
}

// Run some operations
addProduct(new Product(4, "Pen", 2, "Stationery"));
console.log("Total:", calculateTotal());
fetchProducts();
//showProducts();
