export class Invoice {
    constructor(client, //only allows read inside and outside a class but not change the value
    details, // only read and chang inside of the class
    amount // detault - we can change and read the value outside of the class as well as inside of the class
    ) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes GPB ${this.details}`;
    }
}
