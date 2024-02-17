"use strict";
let greet;
greet = () => {
    console.log("hello, again");
};
// we use void when the dont specify what to return and it represents complete lack of return value
const add = (a, b, c = 15) => {
    console.log(a + b);
    console.log(c);
};
add(5, 15, "20");
const minus = (a, b) => {
    return a + b;
};
let result = minus(10, 7);
