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
// Picks specific keys from a type.
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

//Omit<T, K>
// Opposite of Pick → removes specific keys.
type User5 = {
  id: number;
  name: string;
  email: string;
};
type UserWithoutEmail = Omit<User5, "email">;
// { id: number; name: string; }
const u5: UserWithoutEmail = { id: 1, name: "Fuad" };
console.log(u5);

// Exclude<T, U>
// Excludes from T those types that are assignable to U
type Status = "active" | "inactive" | "pending";
type ActiveStatus = Exclude<Status, "inactive">;
// "active" | "pending";
const s1: ActiveStatus = "active"; // ✅ ok
console.log(s1);
// const s2: ActiveStatus = "inactive"; // ❌ Error

//Extract<T, U>
// Opposite of Exclude → extracts only types assignable to U.
type Status2 = "active" | "inactive" | "pending";
type InactiveStatus = Extract<Status2, "inactive" | "pending">;
// "inactive" | "pending";
const s3: InactiveStatus = "inactive"; // ✅ ok
console.log(s3);

//NonNullable<T>
// Removes null and undefined from a type.
type MaybeString = string | null | undefined;
type StrictString = NonNullable<MaybeString>;
// string
const str: StrictString = "Hello"; // ✅ ok
console.log(str);
// const str2: StrictString = null; // ❌ Error
// const str3: StrictString = undefined; // ❌ Error

//ReturnType<T>
// Gets the return type of a function.
type MyFunction = (a: number, b: number) => string;
type MyReturnType = ReturnType<MyFunction>;
// string
const result: MyReturnType = "Hello";
console.log(result);

//Another example of ReturnType
function fetchUser(id: number) {
  return { id, name: "Fuad", email: "fuad@example.com" };
}

type User6 = ReturnType<typeof fetchUser>;
// { id: number; name: string; email: string; }
const user: User6 = fetchUser(1);
console.log(user);

//Parameters<T>
// Gets the parameter types of a function as a tuple.
type MyFunc = (x: string, y: number) => void;
type MyParams = Parameters<MyFunc>;
// [string, number]
const args: MyParams = ["Hello", 42];
console.log(args);

//ConstructorParameters<T>
// Gets the parameter types of a constructor function as a tuple.
class MyClass {
  constructor(public name: string, public age: number) {}
}

type MyClassParams = ConstructorParameters<typeof MyClass>;
// [string, number]
const constructorArgs: MyClassParams = ["Fuad", 25];
const myInstance = new MyClass(...constructorArgs);
console.log(myInstance);

//InstanceType<T>
// Gets the instance type of a constructor function.
class AnotherClass {
  constructor(public title: string) {}
  getTitle() {
    return this.title;
  }
}

type AnotherInstance = InstanceType<typeof AnotherClass>;
// AnotherClass
const anotherInstance: AnotherInstance = new AnotherClass("Hello");
console.log(anotherInstance.getTitle());
