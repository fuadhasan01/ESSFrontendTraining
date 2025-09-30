// Partial<T>
// Makes all properties of T optional.
type User = {
  id: number;
  name: string;
  email: string;
};

type PartialUser = Partial<User>;
// { id?: number; name?: string; email?: string; }

const u: PartialUser = { name: "Fuad" }; // ✅ allowed
console.log(u);

//Required<T>
// Opposite of Partial. Makes all properties required.
type User2 = {
  id?: number;
  name?: string;
};

type StrictUser = Required<User2>;
// { id: number; name: string; }

const u2: StrictUser = { id: 1, name: "Fuad" }; // ✅ must provide all
console.log(u2);

//Readonly<T>
// Makes all properties immutable.
type User3 = {
  id: number;
  name: string;
};

const u3: Readonly<User3> = { id: 1, name: "Fuad" };
// u3.id = 2; ❌ Error
console.log(u3);

//Record<K, T>
// Creates an object type with keys of type K and values of type T
type Roles = "admin" | "user" | "guest";

const permissions: Record<Roles, boolean> = {
  admin: true,
  user: true,
  guest: false,
};
console.log(permissions);

//Another example of Record
type Product = {
  id: number;
  name: string;
  price: number;
};
type ProductMap = Record<number, Product>;
const productCatalog: ProductMap = {
  101: { id: 101, name: "Laptop", price: 1200 },
  102: { id: 102, name: "Smartphone", price: 800 },
  103: { id: 103, name: "Tablet", price: 600 },
};

//Pick<T, K>
type User4 = {
  id: number;
  name: string;
  email: string;
};

type UserPreview = Pick<User4, "id" | "email">;
// { id: number; email: string; }

const u4: UserPreview = { id: 1, email: "fuad@example.com" };

//Another example of Pick
type Product2 = {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  stock: number;
};
type ProductSummary = Pick<Product2, "id" | "name" | "price">;
const product: ProductSummary = {
  id: 101,
  name: "Laptop",
  price: 1200,
};
console.log(product);
