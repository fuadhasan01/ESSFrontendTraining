// Parameter destructuring is a way to extract values from objects or arrays directly in a function’s parameter list instead of accessing them inside the function.
// This makes code cleaner and more readable.

//Destructuring Objects
type User = {
  name: string;
  age: number;
  email: string;
};

const user: User = {
  name: "Fuad",
  age: 25,
  email: "fuad@example.com",
};

//Without destructuring
// function printUser(user: User) {
//   console.log(user.name);
//   console.log(user.age);
//   console.log(user.email);
// }

// printUser(user);

//With parameter destructuring:
function printUser({ name, age, email }: User) {
  console.log(name);
  console.log(age);
  console.log(email);
}

printUser(user);

//Destructuring Arrays
const numbers: number[] = [10, 20, 30];

function sum([a = 0, b = 0, c = 0]: number[]) {
  return a + b + c;
}

console.log(sum(numbers));

//Default Values
function printUser2({ name, age, email = "not provided" }: Partial<User>) {
  console.log(name);
  console.log(age);
  console.log(email);
}

printUser2({ name: "Fuad", age: 25 });
// email will default to "not provided"

//Nested Destructuring
type UserProfile = {
  name: string;
  address: {
    city: string;
    country: string;
    code: number;
  };
};

const userProfile: UserProfile = {
  name: "Fuad",
  address: {
    city: "Dhaka",
    country: "Bangladesh",
    code: 1200,
  },
};

function printAddress({ name, address: { city, country, code } }: UserProfile) {
  console.log(name, city, country, code);
}

printAddress(userProfile); // Fuad Dhaka Bangladesh
