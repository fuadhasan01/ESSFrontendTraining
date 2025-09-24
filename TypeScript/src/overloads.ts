//Overloads
function greet(): void;
function greet(name: string): void;
function greet(name: string, title: string): void;
function greet(name?: string, title?: string): void {
  if (name && title) {
    console.log(`Hello, ${title} ${name}`);
  } else if (name) {
    console.log(`Hello, ${name}`);
  } else {
    console.log("Hello, Guest");
  }
}

greet();
greet("Fuad");
greet("Fuad", "Mr.");
