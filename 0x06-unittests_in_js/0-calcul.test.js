const assert = require("assert");
const { calculateNumber } = require('./0-calcul');
describe("calculate function", () => {
  it("sum of 1 and 3 should be 4", () => {
   assert.equal(calculateNumber(1, 3), 4);
   calculateNumber(1, 3);
  });
 
  it("sum of 1 and 3.7 should be 5", () => {
    assert.equal(calculateNumber(1, 3.7), 5);
    calculateNumber(1, 3.7);
  });
});
