const assert = require("assert");
const { calculateNumber } = require('./0-calcul');
describe("calculate function", () => {
  it("sum of 2 and 3 should be 5", () => {
   assert.equal(calculateNumber(2, 3), 5);
   calculateNumber(2, 3);
  });
 
  it("sum of 2 and 3 should not be 3", () => {
    assert.notEqual(calculateNumber(2, 3), 3);
    calculateNumber(2, 3);
  });
});
