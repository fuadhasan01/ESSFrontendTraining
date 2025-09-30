"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function logPoint(point) {
    console.log(`x: ${point.x} and y: ${point.y}`);
}
const point1 = { x: 12, y: 22 };
const point2 = { x: 54, y: 43, z: 43 };
const point3 = { x: 54, z: 43 };
const rect = { x: 43, y: 55, width: 534, height: 5433 };
const color = { hex: "#5354f3" };
logPoint(point1);
logPoint(point2);
//logPoint(point3);
logPoint(rect);
const user = {
    id: 101,
    name: "Raj",
};
console.log(user);
const auth = {
    login: (username, password) => username === "admin" && password === "@admin123",
    logout: () => console.log("logged out"),
};
console.log(auth.login("admin", "@admin123"));
auth.logout();
const appSetting = {
    theme: "dark",
    timeout: 3000,
    language: "en",
};
console.log(appSetting);
const item = {
    id: 1,
    createdAt: new Date(),
    name: "Laptop",
    price: 12000,
};
console.log(item);
const response = {
    data: ["item1", "item2"],
    success: true,
};
console.log(response);
//# sourceMappingURL=interface.js.map