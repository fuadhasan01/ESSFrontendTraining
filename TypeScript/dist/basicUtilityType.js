"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// { id?: number; name?: string; email?: string; }
const u = { name: "Fuad" }; // ✅ allowed
console.log(u);
// { id: number; name: string; }
const u2 = { id: 1, name: "Fuad" }; // ✅ must provide all
console.log(u2);
const u3 = { id: 1, name: "Fuad" };
// u3.id = 2; ❌ Error
console.log(u3);
const permissions = {
    admin: true,
    user: true,
    guest: false,
};
console.log(permissions);
const productCatalog = {
    101: { id: 101, name: "Laptop", price: 1200 },
    102: { id: 102, name: "Smartphone", price: 800 },
    103: { id: 103, name: "Tablet", price: 600 },
};
// { id: number; email: string; }
const u4 = { id: 1, email: "fuad@example.com" };
const product = {
    id: 101,
    name: "Laptop",
    price: 1200,
};
console.log(product);
// { id: number; name: string; }
const u5 = { id: 1, name: "Fuad" };
console.log(u5);
// "active" | "pending";
const s1 = "active"; // ✅ ok
console.log(s1);
// "inactive" | "pending";
const s3 = "inactive"; // ✅ ok
console.log(s3);
// string
const str = "Hello"; // ✅ ok
console.log(str);
// string
const result = "Hello";
console.log(result);
//Another example of ReturnType
function fetchUser(id) {
    return { id, name: "Fuad", email: "fuad@example.com" };
}
// { id: number; name: string; email: string; }
const user = fetchUser(1);
console.log(user);
// [string, number]
const args = ["Hello", 42];
console.log(args);
//ConstructorParameters<T>
// Gets the parameter types of a constructor function as a tuple.
class MyClass {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
// [string, number]
const constructorArgs = ["Fuad", 25];
const myInstance = new MyClass(...constructorArgs);
console.log(myInstance);
//InstanceType<T>
// Gets the instance type of a constructor function.
class AnotherClass {
    title;
    constructor(title) {
        this.title = title;
    }
    getTitle() {
        return this.title;
    }
}
// AnotherClass
const anotherInstance = new AnotherClass("Hello");
console.log(anotherInstance.getTitle());
//# sourceMappingURL=basicUtilityType.js.map