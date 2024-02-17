type StringOrNum = string | number;
type objWithName = { name: string; uid: StringOrNum };

const logDetails = (uid: string | number, item: string) => {
  console.log(`${item} has uid of ${uid}`);
};

const radnom = (user: { name: string; uid: StringOrNum }) => {
  console.log(`${user.name} says hello`);
};

const radnom2 = (user: objWithName) => {
  console.log(`${user.name} says hello`);
};
