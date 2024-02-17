import { HasFormatter } from "../interfaces/HasFormatter.js";

// Classes
export class Payment implements HasFormatter {
  constructor(
    readonly recipient: string, //only allows read inside and outside a class but not change the value
    private details: string, // only read and chang inside of the class
    public amount: number // detault - we can change and read the value outside of the class as well as inside of the class
  ) {}
  format() {
    return `${this.recipient} is owed GPB ${this.details}`;
  }
}
