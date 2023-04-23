import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  // amount property
  get amount() {
    return this._amount;
  }

  set amount(Newamount) {
    if (typeof Newamount === 'number') {
      this._amount = Newamount;
    } else {
      throw new Error('Newamount must be a number');
    }
  }

  // currency property
  get currency() {
    return this._currency;
  }

  set currency(Newcurrency) {
    if (Newcurrency instanceof Currency) {
      this._currency = Newcurrency;
    } else {
      throw new Error('Newcurrency must be an instanceof Currency');
    }
  }

  displayFullPrice() {
    return (`${this._amount} ${this._currency.name} (${this._currency.code})`);
  }

  // static method
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
