// Optional properties + defaults
type User = {
  name: string;
  age?: number; // optional
  email?: string;
};

function greetUser({ name, age = 18, email }: User) {
  console.log(`Hello ${name}`);
  console.log(`Age: ${age}`);
  console.log(`Email: ${email ?? "Not provided"}`);
}
greetUser({ name: "Fuad" });

//Destructuring directly in parameters vs type narrowing
function printUser({ name, age, email }: User) {
  if (age) {
    console.log(age + 5); // okay
  }
  // console.log(email.toLowerCase()); // ❌ Error: email might be undefined
  if (email) {
    console.log(email.toLowerCase());
  }
}

// Nested + Default + Optional Combined (Advanced)

type UserProfile = {
  name: string;
  address?: {
    city?: string;
    country?: string;
  };
};

function printProfile({
  name,
  address: { city = "Unknown", country = "Unknown" } = {},
}: UserProfile) {
  console.log(`${name} lives in ${city}, ${country}`);
}
printProfile({ name: "Fuad" });
