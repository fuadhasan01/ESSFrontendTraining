interface Point {
  x: number;
  y: number;
}

function logPoint(point: Point) {
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
// logPoint(color);

// readonly and optional property
interface UserProfile {
  readonly id: number;
  name: string;
  email?: string;
}
const user: UserProfile = {
  id: 101,
  name: "Raj",
};
console.log(user);

// method signature
interface AuthService {
  login(username: string, password: string): boolean;
  logout(): void;
}
const auth: AuthService = {
  login: (username, password) =>
    username === "admin" && password === "@admin123",
  logout: () => console.log("logged out"),
};
console.log(auth.login("admin", "@admin123"));
auth.logout();

// index signature - dynamic key with value type
interface Settings {
  [key: string]: string | number;
}
const appSetting: Settings = {
  theme: "dark",
  timeout: 3000,
  language: "en",
};
console.log(appSetting);

// interface inheritance
interface BaseEntity {
  id: number;
  createdAt: Date;
}
interface Prodcut extends BaseEntity {
  name: string;
  price: number;
}
const item: Prodcut = {
  id: 1,
  createdAt: new Date(),
  name: "Laptop",
  price: 12000,
};
console.log(item);

// generic interface
interface ApiResponse<T> {
  data: T;
  success: boolean;
  error?: string;
}
const response: ApiResponse<string[]> = {
  data: ["item1", "item2"],
  success: true,
};
console.log(response);
