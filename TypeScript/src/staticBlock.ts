// Static Block (ES2022 feature, supported in TS 4.4+)

class Config {
  static API_URL: string;
  static TIMEOUT: number;

  static {
    // initialization logic
    Config.API_URL = "https://api.dev.com";
    Config.TIMEOUT = 5000;
    console.log("Static block executed!");
  }
  static {
    console.log("Another static block!");
  }
}

console.log(Config.API_URL); // depends on env
console.log(Config.TIMEOUT); // 5000

// Multiple Static Blocks
class Test {
  static value: number;

  static {
    console.log("Block 1");
    Test.value = 10;
  }

  static {
    console.log("Block 2");
    Test.value *= 2;
  }
}

console.log(Test.value); // ✅ 20

// Static + Inheritance
class Parent {
  static message = "Hello from Parent";
}

class Child extends Parent {}

console.log(Parent.message); // Hello from Parent
console.log(Child.message); // Hello from Parent
Child.message = "Hi from Child";
console.log(Parent.message); // still Hello from Parent
console.log(Child.message); // Hi from Child

// Static + Instance Members (Tricky Case)
class Example {
  static x = 100;
  y = 200;

  show() {
    console.log(Example.x, this.y);
  }
}

const e = new Example();
e.show();
