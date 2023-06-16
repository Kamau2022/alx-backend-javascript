const chai = require('chai')
const expect = chai.expect
const calculateNumber = require('./2-calcul_chai');
describe("SUM", () => {
  it("sum of 1 and 3 should be 4", () => {
   expect(calculateNumber('SUM', 1, 3)).to.equal (4);
  });
});
describe("SUBTRACT", () => {
  it("difference of 5 and 3 should be 2", () => {
   expect(calculateNumber('SUBTRACT', 5, 3)).to.equal(2);
  }); 
});
describe("DIVIDE", () => {
  it("division of 25 and 5 should be 5", () => {
   expect(calculateNumber('DIVIDE', 25, 5)).to.equal(5);
});
  it("should return Error if the denominator is zero", () => {
   expect(calculateNumber('DIVIDE', 25, 0)).to.equal ('Error');
});
});
