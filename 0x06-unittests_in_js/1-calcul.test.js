const assert = require("assert");
const calculateNumber = require('./1-calcul');
describe("SUM", () => {
  it("sum of 1 and 3 should be 4", () => {
   assert.equal(calculateNumber('SUM', 1, 3), 4);
  });
});
describe("SUBTRACT", () => {
  it("difference of 5 and 3 should be 2", () => {
   assert.equal(calculateNumber('SUBTRACT', 5, 3), 2);
  }); 
});
describe("DIVIDE", () => {
  it("division of 25 and 5 should be 5", () => {
   assert.equal(calculateNumber('DIVIDE', 25, 5), 5);
});
  it("should return Error if the denominator is zero", () => {
   assert.equal(calculateNumber('DIVIDE', 25, 0), 'Error');
});
});
