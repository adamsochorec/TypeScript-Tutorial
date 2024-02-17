import { Invoice } from "./classes/invoice.js";
import { listTemplate } from "./classes/listTemplats.js";
import { Payment } from "./classes/payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

/*
let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice("yoshi", "web work", 250);
docTwo = new Payment("mario", "plumbing work", 200);

let docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);
console.log(docs);


const invOne = new Invoice("mario", "work on the mario website", 250);
const invTwo = new Invoice("luigi", "work on the luigi website", 350);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach((inv) => {
  console.log(inv.client, inv.amount, inv.format());
});
*/

const form = document.querySelector(".new-item-form") as HTMLFormElement;

// inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLSelectElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// list tempalte instace
const ul = document.querySelector("ul")!;
const list = new listTemplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let values: [string, string, number];
  values = [tofrom.value, details.value, amount.valueAsNumber];

  let doc: HasFormatter;
  if (type.value === "invoice") {
    doc = new Invoice(...values);
  } else {
    doc = new Payment(...values);
  }

  list.render(doc, type.value, "end");
});

// ENUMS
// Way to specify descriptive constants and associate each one  with a numeric value

enum ReourceType {
  BOOK,
  AUTHOR,
  FILM,
  DIRECTOR,
  PERSON,
}

interface Resource<T> {
  uid: number;
  resourceType: number;
  data: T;
}

const docOne: Resource<object> = {
  uid: 1,
  resourceType: ReourceType.BOOK,
  data: { title: "Name of the wind" },
};

const docTwo: Resource<object> = {
  uid: 10,
  resourceType: ReourceType.PERSON,
  data: { name: "yoshi" },
};
console.log(docOne, docTwo);

// TUPLES
// The types of data in each position in a tuple is fiex once it's been initialised

let arr = ["ryu", 25, true];
arr[0] = false;
arr[1] = "yoshi";
arr = [30, false, "yoshi"];

let tup: [string, number, boolean] = ["yoshi", 24, true];
tup[0] = "ken";
tup[1] = 30;
tup[2] = false;
