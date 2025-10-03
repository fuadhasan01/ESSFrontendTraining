"use strict";
// abstract class A {
//   abstract name: string;
//   greet() {
//     console.log("Hello", this.name);
//   }
// }
Object.defineProperty(exports, "__esModule", { value: true });
// class B extends A {
//   name = "B";
//   private secret = 42;
//   getSecret() {
//     return this.secret;
//   }
// }
// const obj: A = new B();
// obj.greet();
// console.log((obj as B).getSecret()); // ✅ Will this compile?
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
//   y = 100; // does this override Base.y?
//   show() {
//     console.log(this.x, this.y);
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
// console.log(box.value.toUpperCase());
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
//   getVal() {
//     return this.val;
//   }
// }
// class Child extends Parent {
//   val = 2;
// }
// const c: Parent = new Child();
// console.log(c.getVal());
// type User = { id: number; name?: string };
// function updateUser(user: User, props: Partial<User>) {
//   return { ...user, ...props };
// }
// const u = updateUser({ id: 1, name: "Fuad" }, { name: "Alice" });
// console.log(u.name!.length);
class Counter {
    static _count = 0;
    static increment() {
        this._count++;
        return this._count;
    }
}
console.log(Counter.increment());
//# sourceMappingURL=practiceProblem4.js.map