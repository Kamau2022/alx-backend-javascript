const sinon = require("sinon");
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./3-payment');
describe("SUM", () => {
  it("spy Utils.calculateNumber", () => {
   const spy = sinon.spy(Utils);
   sendPaymentRequestToApi(100, 20);
   expect(spy.calculateNumber.calledWith('SUM', 100, 20));
   sinon.restore();
  });
});
