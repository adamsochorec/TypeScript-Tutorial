// Classes
export class Payment {
    constructor(recipient, //only allows read inside and outside a class but not change the value
    details, // only read and chang inside of the class
    amount // detault - we can change and read the value outside of the class as well as inside of the class
    ) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} is owed GPB ${this.details}`;
    }
}
