"use strict";
// GENERICS
const addUID = (obj) => {
    // <T> captures whatever item we pass to the function and captures what properties are on it if is an object.
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid }); // When we return it, it knows what properties are on the object
};
let docOne = addUID({ name: "yoshi", age: 40 });
// let docTwo = addUID("hello");
console.log(docOne.age);
const docThree = {
    uid: 1,
    resourceName: "person",
    data: { name: "shaun" },
};
const docFour = {
    uid: 2,
    resourceName: "shoppingList",
    data: ["bread", "milk"],
};
console.log(docThree, docFour);
