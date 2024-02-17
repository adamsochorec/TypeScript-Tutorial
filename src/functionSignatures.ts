// let string: Function;

// example 1
let string: (a: string, b: string) => void;
string = (name: string, greeting: string): void => {
  console.log(`${name} says ${greeting}`);
};

// example 2
let calc: (a: number, b: number, c: string) => number;
calc = (numOne: number, numTwo: number, action: string) => {
  if (action === "add") {
    return numOne + numTwo;
  } else {
    return numOne - numTwo;
  }
};

// example 3
let logDetails2: (obj: { name: string; age: number }) => void;

type person = { name: string; age: number };

logDetails2 = (ninja: person) => {
  console.log(`${ninja.name} is ${ninja.age} years old`);
};
