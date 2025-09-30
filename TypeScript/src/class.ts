//simple class
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

const person1 = new Person("Fuad", 21);
person1.greet();
const person2 = new Person("Rafi", 20);
person2.greet();

//Inheritance
class Student extends Person {
  studentID: number;
  constructor(name: string, age: number, studentID: number) {
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
  private employeeID: number; // private: only accessible within the class
  protected department: string; // protected: accessible within the class and subclasses
  public name: string; // public: accessible from anywhere
  constructor(name: string, employeeID: number, department: string) {
    this.name = name;
    this.employeeID = employeeID;
    this.department = department;
  }
  setEmployeeID(id: number) {
    this.employeeID = id;
  }
  getEmployeeId() {
    return this.employeeID;
  }
}
const emp1 = new Employee("Charlie", 2001, "HR");
console.log(emp1.name); // ok
// console.log(emp1.employeeID); // ❌ error
// console.log(emp1.department); // ❌ error
class Manager extends Employee {
  constructor(name: string, employeeID: number, department: string) {
    super(name, employeeID, department);
  }
  getDepartment() {
    return this.department;
  }
}
const mgr1 = new Manager("David", 3001, "IT");
console.log(mgr1.name); // ok
console.log(mgr1.getDepartment()); // ok
console.log(mgr1.getEmployeeId()); // ❌ error
mgr1.setEmployeeID(4001); // ok

//Static Members
class Company {
  static companyName: string = "TechCorp"; // static property
  static getCompanyInfo() {
    // static method
    return `Company: ${Company.companyName}`;
  }
}
console.log(Company.companyName);
console.log(Company.getCompanyInfo());

//Complex Class Example
class BankAccount {
  private accountNumber: string;
  private balance: number;
  constructor(accountNumber: string, initialBalance: number = 0) {
    this.accountNumber = accountNumber;
    this.balance = initialBalance;
  }

  deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited: $${amount}. New Balance: $${this.balance}`);
    } else {
      console.log("Deposit amount must be positive.");
    }
  }
  withdraw(amount: number): void {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrew: $${amount}. New Balance: $${this.balance}`);
    } else {
      console.log("Invalid withdrawal amount.");
    }
  }
  getBalance(): number {
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
abstract class Shape {
  abstract area(): number; // abstract method
  abstract perimeter(): number; // abstract method
  describe(): void {
    console.log("This is a shape.");
  }
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  area(): number {
    return Math.PI * this.radius * this.radius;
  }

  perimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(private width: number, private height: number) {
    super();
  }

  area(): number {
    return this.width * this.height;
  }

  perimeter(): number {
    return 2 * (this.width + this.height);
  }
}
const circle = new Circle(5);
console.log(`Circle Area: ${circle.area()}`);
console.log(`Circle Perimeter: ${circle.perimeter()}`);
circle.describe();

//Interfaces
interface Drivable {
  name: string;
  speed: number;
  start(): void;
  drive(distance: number): void;
  stop(): void;
}
class Car implements Drivable {
  name: string;
  speed: number;

  constructor(name: string, speed: number) {
    this.name = name;
    this.speed = speed;
  }
  printCar() {
    console.log(`Car Name: ${this.name}, Speed: ${this.speed}`);
  }

  start(): void {
    console.log("Car started.");
  }
  drive(distance: number): void {
    console.log(`Car drove ${distance} meters.`);
  }
  stop(): void {
    console.log("Car stopped.");
  }
}
const myCar = new Car("Toyota", 120);
myCar.printCar();
myCar.start();
myCar.drive(100);
myCar.stop();
