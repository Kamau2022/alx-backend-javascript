const assert = require("assert");
const calculateNumber = require('./0-calcul');

describe("calculateNumber", () => {
  describe("SUM", () => {
    it("should return the sum of two numbers", () => {
      assert.equal(calculateNumber('SUM', 1, 3), 4);
    });
  });

  describe("SUBTRACT", () => {
    it("should return the difference of two numbers", () => {
      assert.equal(calculateNumber('SUBTRACT', 5, 3), 2);
    });
  });

  describe("DIVIDE", () => {
    it("should return the division of two numbers", () => {
      assert.equal(calculateNumber('DIVIDE', 25, 5), 5);
    });
  });
});

