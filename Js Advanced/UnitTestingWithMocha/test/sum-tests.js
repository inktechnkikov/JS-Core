let sum = require("../sum").sum;
let expect = require("chai").expect;
describe("sum(arr)",function () {
    it("should return 5 for [2,3]",function () {
        let expSum = 6;
        let actSum = sum([3,3]);
        expect(actSum).to.be.equal(expSum);
    });
    it("should return 0 for [pesho]",function () {
        let expectedSum = 0;
        let actualSum = sum('pesho');
        expect(actualSum).to.be.NaN;
    });
    it("should retun 100 for[20,20,20,40]",function () {
        let expSum = 100;
        let actSum = sum([20,20,20,40]);
        expect(actSum).to.be.equal(expSum);
    });
    it("should return 54 for[12,12]",function () {
        expect(sum([40,14])).to.be.equal(54);
    });
    it("shoud return 130 for[10,10,10,20,50,10,10,10]",function () {
        expect(sum([10,10,10,20,50,10,10,10])).to.equal(130);
    })

});
console.log(sum([10,10,10,20,50,10,10,10]));