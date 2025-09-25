"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//simple class
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
const person1 = new Person("Fuad", 21);
person1.greet();
const person2 = new Person("Rafi", 20);
person2.greet();
//Inheritance
class Student extends Person {
    studentID;
    constructor(name, age, studentID) {
        super(name, age);
        this.studentID = studentID;
    }
    study() {
        console.log(`${this.name} is studying.`);
    }
}
const student1 = new Student("Alice", 22, 1001);
student1.greet();
student1.study();
const student2 = new Student("Bob", 23, 1002);
student2.greet();
student2.study();
//Access Modifiers
class Employee {
    employeeID; // private: only accessible within the class
    department; // protected: accessible within the class and subclasses
    name; // public: accessible from anywhere
    constructor(name, employeeID, department) {
        this.name = name;
        this.employeeID = employeeID;
        this.department = department;
    }
}
const emp1 = new Employee("Charlie", 2001, "HR");
console.log(emp1.name); // ok
// console.log(emp1.employeeID); // ❌ error
// console.log(emp1.department); // ❌ error
class Manager extends Employee {
    constructor(name, employeeID, department) {
        super(name, employeeID, department);
    }
    getDepartment() {
        return this.department;
    }
}
const mgr1 = new Manager("David", 3001, "IT");
console.log(mgr1.name); // ok
console.log(mgr1.getDepartment()); // ok
// console.log(mgr1.employeeID); // ❌ error
//Static Members
class Company {
    static companyName = "TechCorp"; // static property
    static getCompanyInfo() {
        // static method
        return `Company: ${Company.companyName}`;
    }
}
console.log(Company.companyName);
console.log(Company.getCompanyInfo());
//Complex Class Example
class BankAccount {
    accountNumber;
    balance;
    constructor(accountNumber, initialBalance = 0) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited: $${amount}. New Balance: $${this.balance}`);
        }
        else {
            console.log("Deposit amount must be positive.");
        }
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrew: $${amount}. New Balance: $${this.balance}`);
        }
        else {
            console.log("Invalid withdrawal amount.");
        }
    }
    getBalance() {
        return this.balance;
    }
}
const myAccount = new BankAccount("123456789", 1000);
myAccount.deposit(500);
myAccount.withdraw(200);
console.log(`Final Balance: $${myAccount.getBalance()}`);
myAccount.withdraw(2000); // Invalid withdrawal amount.
myAccount.deposit(-100); // Deposit amount must be positive.
// myAccount.balance = 5000; // ❌ error: balance is private
// console.log(myAccount.accountNumber); // ❌ error: accountNumber is private
// console.log(myAccount.department); // ❌ error: department is protected
// console.log(myAccount.employeeID); // ❌ error: employeeID is private
// console.log(myAccount.name); // ❌ error: name is public but not accessible here
// console.log(myAccount.getDepartment()); // ❌ error: getDepartment is not a method of BankAccount
//abstract class
class Shape {
    describe() {
        console.log("This is a shape.");
    }
}
class Circle extends Shape {
    radius;
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
    perimeter() {
        return 2 * Math.PI * this.radius;
    }
}
class Rectangle extends Shape {
    width;
    height;
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
    perimeter() {
        return 2 * (this.width + this.height);
    }
}
const circle = new Circle(5);
console.log(`Circle Area: ${circle.area()}`);
console.log(`Circle Perimeter: ${circle.perimeter()}`);
circle.describe();
class Car {
    start() {
        console.log("Car started.");
    }
    drive(distance) {
        console.log(`Car drove ${distance} meters.`);
    }
    stop() {
        console.log("Car stopped.");
    }
}
//# sourceMappingURL=class.js.map