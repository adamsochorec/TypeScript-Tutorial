import { Invoice } from "./classes/invoice.js";
import { listTemplate } from "./classes/listTemplats.js";
import { Payment } from "./classes/payment.js";
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
const form = document.querySelector(".new-item-form");
// inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// list tempalte instace
const ul = document.querySelector("ul");
const list = new listTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, "end");
});
// ENUMS
// Way to specify descriptive constants and associate each one  with a numeric value
var ReourceType;
(function (ReourceType) {
    ReourceType[ReourceType["BOOK"] = 0] = "BOOK";
    ReourceType[ReourceType["AUTHOR"] = 1] = "AUTHOR";
    ReourceType[ReourceType["FILM"] = 2] = "FILM";
    ReourceType[ReourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ReourceType[ReourceType["PERSON"] = 4] = "PERSON";
})(ReourceType || (ReourceType = {}));
const docOne = {
    uid: 1,
    resourceType: ReourceType.BOOK,
    data: { title: "Name of the wind" },
};
const docTwo = {
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
let tup = ["yoshi", 24, true];
tup[0] = "ken";
tup[1] = 30;
tup[2] = false;
