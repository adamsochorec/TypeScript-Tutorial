const character = "luigi";

console.log(character);

const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  console.log(input);
});

const circ = (diameter: number) => {
  return diameter * Math * PI;
};

// ARRAYS
console.log(circ(7.5));

let names = ["luigi", "mario", "yoshi"];

names.push("toad");

let numbers = [10, 20, 30, 40];
numbers.push(25);

// OBJECTS
let ninja = {
  name: "mario",
  belt: "black",
  age: 30,
};
ninja.age = 40;
ninja.name = "ryu";
// ninja.age = "30";
// ninja.skills = ['fighting', 'sneaking']

ninja = {
  name: "yoshi",
  belt: "orange",
  age: 40,
};

// explicit types
let random: string;
let age: number;
let isLoggedIn: boolean;

age = 30;
isLoggedIn = true;

// arrays
let ninjas: string[] = [];
ninjas = ["yoshi"];

// union types
let mixed: (string | number)[] = [];
mixed.push("hello");
mixed.push(20);
// mixed.push(true)

console.log(mixed);

let uid: string | number;
uid = "123";
uid = 123;

// objects
let ninjaOne: object;
ninjaOne = {
  name: "yoshi",
  age: 30,
};

let ninjaTwo: {
  name: string;
  age: number;
  beltColour: string;
};

ninjaTwo = { name: "mario", age: 20, beltColour: "black" };

// TUTORIAL 6  Dynamic (any) Types
let number: any = 25;
number = true;
console.log(number);
number = "hello";
console.log(number);
number = { name: "luigi" };
console.log(number);

let freestyle: any[] = [];

freestyle.push(5);
freestyle.push("mario");
freestyle.push(false);
console.log(freestyle);

let magor: {
  name: any;
  age: any;
};
magor = { name: "yoshi", age: 25 };
console.log(magor);

magor = { name: 30, age: "yoshi" };
console.log(magor);
