// let tuple: [string, number] = ["TS", 2025];
// tuple[2] = "Extra";
// console.log(tuple);
// const arr: readonly number[] = [1, 2, 3];
// arr.push(4);
// console.log(arr);

// let a: any = 5;
// let u: unknown = 5;
// console.log(a + 10);

// enum Status {
//   Pending,
//   Done = 10,
//   Cancelled,
// }
// console.log(Status.Pending, Status.Done, Status.Cancelled);
// console.log(Status[11]);

// type Direction = "up" | "down";
// let dir: Direction = "left";
// console.log(dir);

// interface Person {
//   name: string;
//   age: number;
//   active: boolean;
// }
// type Nullable<T> = {
//   [K in keyof T]: T[K] | null;
// };
// const p: Nullable<Person> = {
//   name: null,
//   age: 22,
//   active: null,
// };
// console.log(p);

function identity<T extends { id: number }>(obj: T): number {
  return obj.id;
}
console.log(identity({ id: 101, name: "Shampa" }));
console.log(identity({ id: 7 }));
