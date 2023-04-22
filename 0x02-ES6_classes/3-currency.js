export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  // code property
  get code() {
    return this._code;
  }

  set code(Newcode) {
    this._code = Newcode;
  }

  // name property
  get name() {
    return this._name;
  }

  set name(Newname) {
    this._name = Newname;
  }

  displayFullCurrency() {
    return (`${this._name} (${this._code})`);
  }
}
