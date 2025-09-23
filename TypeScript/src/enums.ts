// Enum = a special type in TypeScript used to group related values with names.

//Why use Enum?
//Without Enum
let signal1 = "RED"; // or "YELLOW" or "GREEN"

//Problem: You might type "REDD" (typo) → still a string, but wrong.

// With enum:
enum Signal {
  Red,
  Yellow,
  Green,
}
let signal2: Signal = Signal.Red;

// Numeric Enums (Default)
// By default, values start at 0 and increase.
enum Direction {
  Up, // 0
  Down, // 1
  Left, // 2
  Right, // 3
}

let move: Direction = Direction.Down;
console.log(move); // 1

//Enums are both name → value and value → name.
console.log(Direction.Up); // 0
console.log(Direction[0]); // "Up"

// Numeric Enums (Custom Start)
// You can choose the starting number.
enum Status {
  Pending = 1,
  InProgress, // 2
  Done, // 3
}
console.log(Status.Pending);
console.log(Status[1]);

//String Enums
// Values are strings (not numbers).
// Useful when you want readable outputs.
enum Roles {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST",
}

let role: Roles = Roles.Admin;
console.log(role); // "ADMIN"

//Heterogeneous Enums (Mix of number + string)
//Not common but possible
enum Mix {
  No = 0,
  Yes = "YES",
}

console.log(Mix[0]);

//Enums in Objects / Functions
enum PaymentStatus {
  Paid,
  Unpaid,
  Failed,
}

function printStatus(status: PaymentStatus) {
  if (status === PaymentStatus.Paid) {
    console.log("Payment successful");
  } else if (status === PaymentStatus.Unpaid) {
    console.log("Payment pending");
  } else {
    console.log("Payment failed");
  }
}

printStatus(PaymentStatus.Unpaid); // "Payment pending"

//Enums with Arrays / Objects
enum Days {
  Sat,
  Sun,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
}

const workHours: Record<Days, string> = {
  [Days.Sat]: "Closed",
  [Days.Sun]: "10am-4pm",
  [Days.Mon]: "9am-6pm",
  [Days.Tue]: "9am-6pm",
  [Days.Wed]: "9am-6pm",
  [Days.Thu]: "9am-6pm",
  [Days.Fri]: "9am-12pm",
};

console.log(workHours[Days.Mon]); // "9am-6pm"
