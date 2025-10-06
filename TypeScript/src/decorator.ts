//Class Decorators
function Logger(constructor: Function) {
  console.log("This class was created:", constructor.name);
}

@Logger
class User {
  constructor(public name: string) {}
}

//Property Decorator
function ReadOnly(target: any, propertyKey: string) {
  Object.defineProperty(target, propertyKey, {
    writable: false,
  });
}

class Person {
  @ReadOnly
  name: string = "Fuad";
}

const p = new Person();
//p.name = "Labib"; //why it not show error in compilation?
console.log(p.name); // Fuad

//Method Decorator
function LogMethod(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Method ${propertyKey} called with args:`, args);
    return originalMethod.apply(this, args);
  };
  return descriptor;
}
class Calculator {
  @LogMethod
  add(a: number, b: number): number {
    return a + b;
  }
}
const calc = new Calculator();
console.log(calc.add(2, 3)); // Logs method call and result
console.log(calc.add(5, 7)); // Logs method call and result
