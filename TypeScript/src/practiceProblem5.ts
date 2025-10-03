// abstract class A {
//   abstract name: string;
//   greet() {
//     console.log("Hello", this.name);
//   }
// }
// class B extends A {
//   name = "B";
//   private secret = 42;
// }
// const obj: A = new B();
// obj.greet();
// console.log((obj as B).secret);

// interface X {
//   a: number;
// }
// interface X {
//   b: string;
// }
// type Y = Pick<X, "a"> & Partial<X>;
// let y: Y = { a: 10 };
// y.b = "hi";
// console.log(y.a, y.b);

// class Base {
//   protected x = 5;
//   private y = 10;
//   getY() {
//     return this.y;
//   }
// }
// class Derived extends Base {
//   x = 50;
//   show() {
//     console.log(this.x, this.getY());
//   }
// }
// const d = new Derived();
// d.show();
// console.log(d.getY());

// type MaybeString = string | null | undefined;
// function print(s: MaybeString) {
//   if (s) console.log(s.length);
//   else console.log("Empty");
// }
// print("abc");
// print("");
// print(null);

// function Decor(constructor: Function) {
//   constructor.prototype.tag = "decorated";
// }
// @Decor
// class Car {
//   constructor(public name: string) {}
// }
// const car = new Car("Audi");
// console.log((car as any).tag);

// class GenericBox<T> {
//   value: T;
//   constructor(val: T) {
//     this.value = val;
//   }
// }
// const box = new GenericBox<number | string>(42);
// box.value = "hello";
// console.log(box.value.length);

// interface Box {
//   w: number;
// }
// interface Box {
//   h: number;
// }
// type PartialBox = Partial<Box>;
// const pb: PartialBox = { w: 10 };
// console.log(pb.h ?? 0);

// class Parent {
//   protected val = 1;
// }
// class Child extends Parent {
//   val = 2;
// }
// const c: Parent = new Child();
// console.log(c.val);

// type User = { id: number; name?: string };
// function updateUser(user: User, props: Partial<User>) {
//   return { ...user, ...props };
// }
// const u = updateUser({ id: 1 }, { name: "Alice" });
// console.log(u.name!.length);

// class Counter {
//   private static _count = 0;
//   static increment() {
//     this._count++;
//     return this._count;
//   }
// }
// console.log(Counter.increment());
// console.log(new Counter().constructor["increment"]());

// class Alpha {
//   protected a = 1;
// }
// class Beta extends Alpha {
//   protected a = 2;
// }
// const beta: Alpha = new Beta();
// console.log((beta as Beta).a);

// type T1 = { x: number; y?: string };
// type T2 = Partial<T1>;
// const obj2: T2 = {};
// obj2.y = "hello";
// console.log(obj2.x ?? 0, obj2.y);

// abstract class C {
//   abstract num: number;
//   show() {
//     console.log(this.num);
//   }
// }
// class D extends C {
//   num = 5;
// }
// const cd: C = new D();
// cd.show();

// interface P {
//   a: number;
// }
// interface P {
//   b: number;
// }
// type Q = Omit<P, "b"> & Partial<P>;
// const q: Q = { a: 10 };
// q.b = 20;
// console.log(q.a + q.b);

// function Logger(constructor: Function) {
//   console.log("Logging", constructor.name);
// }
// @Logger
// class Vehicle {
//   constructor(public name: string) {}
// }
// const v = new Vehicle("Bus");
// console.log(v.name);

// class Box<T> {
//   constructor(public value: T) {}
// }
// const b = new Box<number | string>(10);
// b.value = "world";
// console.log(b.value.length);

// class X {
//   private p = 5;
//   show() {
//     console.log(this.p);
//   }
// }
// const x = new X();
// console.log((x as any).p);
// x.show();

// type Person = { id: number; name?: string };
// const p: Partial<Person> = {};
// p.name = "Tom";
// console.log(p.name?.length ?? 0);

// abstract class Repo<T> {
//   abstract getAll(): T[];
//   save(item: T) {
//     console.log("Saved", item);
//   }
// }
// class UserRepo extends Repo<string> {
//   getAll() {
//     return ["Alice", "Bob"];
//   }
// }
// const repo = new UserRepo();
// repo.save("Charlie");
// console.log(repo.getAll());

class StaticTest {
  static val = 1;
  static inc() {
    return ++this.val;
  }
}
console.log(StaticTest.inc());
const s = new StaticTest();
// console.log(s.constructor["inc"]());
