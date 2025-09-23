"use strict";
// Enum = a special type in TypeScript used to group related values with names.
Object.defineProperty(exports, "__esModule", { value: true });
//Why use Enum?
//Without Enum
let signal1 = "RED"; // or "YELLOW" or "GREEN"
//Problem: You might type "REDD" (typo) → still a string, but wrong.
// With enum:
var Signal;
(function (Signal) {
    Signal[Signal["Red"] = 0] = "Red";
    Signal[Signal["Yellow"] = 1] = "Yellow";
    Signal[Signal["Green"] = 2] = "Green";
})(Signal || (Signal = {}));
let signal2 = Signal.Red;
// Numeric Enums (Default)
// By default, values start at 0 and increase.
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
let move = Direction.Down;
console.log(move); // 1
//Enums are both name → value and value → name.
console.log(Direction.Up); // 0
console.log(Direction[0]); // "Up"
// Numeric Enums (Custom Start)
// You can choose the starting number.
var Status;
(function (Status) {
    Status[Status["Pending"] = 1] = "Pending";
    Status[Status["InProgress"] = 2] = "InProgress";
    Status[Status["Done"] = 3] = "Done";
})(Status || (Status = {}));
console.log(Status.Pending);
console.log(Status[1]);
//String Enums
// Values are strings (not numbers).
// Useful when you want readable outputs.
var Roles;
(function (Roles) {
    Roles["Admin"] = "ADMIN";
    Roles["User"] = "USER";
    Roles["Guest"] = "GUEST";
})(Roles || (Roles = {}));
let role = Roles.Admin;
console.log(role); // "ADMIN"
//Heterogeneous Enums (Mix of number + string)
//Not common but possible
var Mix;
(function (Mix) {
    Mix[Mix["No"] = 0] = "No";
    Mix["Yes"] = "YES";
})(Mix || (Mix = {}));
console.log(Mix[0]);
//Enums in Objects / Functions
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus[PaymentStatus["Paid"] = 0] = "Paid";
    PaymentStatus[PaymentStatus["Unpaid"] = 1] = "Unpaid";
    PaymentStatus[PaymentStatus["Failed"] = 2] = "Failed";
})(PaymentStatus || (PaymentStatus = {}));
function printStatus(status) {
    if (status === PaymentStatus.Paid) {
        console.log("Payment successful");
    }
    else if (status === PaymentStatus.Unpaid) {
        console.log("Payment pending");
    }
    else {
        console.log("Payment failed");
    }
}
printStatus(PaymentStatus.Unpaid); // "Payment pending"
//Enums with Arrays / Objects
var Days;
(function (Days) {
    Days[Days["Sat"] = 0] = "Sat";
    Days[Days["Sun"] = 1] = "Sun";
    Days[Days["Mon"] = 2] = "Mon";
    Days[Days["Tue"] = 3] = "Tue";
    Days[Days["Wed"] = 4] = "Wed";
    Days[Days["Thu"] = 5] = "Thu";
    Days[Days["Fri"] = 6] = "Fri";
})(Days || (Days = {}));
const workHours = {
    [Days.Sat]: "Closed",
    [Days.Sun]: "10am-4pm",
    [Days.Mon]: "9am-6pm",
    [Days.Tue]: "9am-6pm",
    [Days.Wed]: "9am-6pm",
    [Days.Thu]: "9am-6pm",
    [Days.Fri]: "9am-12pm",
};
console.log(workHours[Days.Mon]); // "9am-6pm"
//# sourceMappingURL=enums.js.map