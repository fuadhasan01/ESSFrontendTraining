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
//# sourceMappingURL=basicUtilityType.js.map