export class Invoice {
  constructor(
    readonly client: string, //only allows read inside and outside a class but not change the value
    private details: string, // only read and chang inside of the class
    public amount: number // detault - we can change and read the value outside of the class as well as inside of the class
  ) {}
  format() {
    return `${this.client} owes GPB ${this.details}`;
  }
}
