let sum = require("../sum").sum;
let expect = require("chai").expect;
describe("sum(arr)",function () {
    it("should return 5 for [2,3]",function () {
        let expSum = 6;
        let actSum = sum([3,3]);
        expect(actSum).to.be.equal(expSum);
    });
});
console.log(sum([2,3]));