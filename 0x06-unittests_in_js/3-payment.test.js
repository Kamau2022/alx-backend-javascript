const sinon = require("sinon");
const assert = require('assert');
const sendPaymentRequestToApi = require('./3-payment');
describe("SUM", () => {
  it("spy Utils.calculateNumber", () => {
   const spy = sinon.spy();
   sendPaymentRequestToApi(100, 20);
   sinon.restore();
  });
});
