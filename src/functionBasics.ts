let greet: Function;

greet = () => {
  console.log("hello, again");
};

// we use void when the dont specify what to return and it represents complete lack of return value
const add = (a: number, b: number, c: number | string = 15): void => {
  console.log(a + b);
  console.log(c);
};
add(5, 15, "20");

const minus = (a: number, b: number): number => {
  return a + b;
};

let result = minus(10, 7);
