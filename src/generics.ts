// GENERICS

const addUID = <T extends { name: string }>(obj: T) => {
  // <T> captures whatever item we pass to the function and captures what properties are on it if is an object.
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid }; // When we return it, it knows what properties are on the object
};
let docOne = addUID({ name: "yoshi", age: 40 });
// let docTwo = addUID("hello");
console.log(docOne.age);

// with interfaces
interface Resource<T> {
  uid: number;
  resourceName: string;
  data: object;
}

const docThree: Resource<object> = {
  uid: 1,
  resourceName: "person",
  data: { name: "shaun" },
};

const docFour: Resource<string[]> = {
  uid: 2,
  resourceName: "shoppingList",
  data: ["bread", "milk"],
};

console.log(docThree, docFour);
