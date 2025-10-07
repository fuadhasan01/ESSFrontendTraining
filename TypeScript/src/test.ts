function first() {
  console.log("first(): factory evaluated");
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("first(): called");
    return descriptor;
  };
}
class Calculator {
  @first()
  add() {
    return 1 + 1;
    // This line will not be reached
    console.log("add method called");
  }
}
