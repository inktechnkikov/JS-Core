let SortedList = require('./SortedList').SortedList;
let expect = require("chai").expect;
describe("SortedList",function () {
    let myList = {};
    beforeEach(function () {
        myList = new SortedList();
    });
    //First check for a function!
    it("should have a constructor",function () {
        expect(typeof SortedList).to.equal("function");
        expect(SortedList.hasOwnProperty('add')).to.equal(true,"didnt find add function add");
        expect(SortedList.hasOwnProperty('remove')).to.equal(true,"didnt find remove function");
        expect(SortedList.hasOwnProperty('get')).to.equal(true,"didnt fing get function");
        expect(SortedList.hasOwnProperty('size')).to.equal(true,"didnt find a size function");
    });
    it("shoud have size prop",function () {
        expect(myList.size).to.equal(0);
    });
    it("should have working add",function () {
        myList.add(5);
        expect(myList.size).to.equal(1);
    });
    it("shold have working add and get",function () {
        myList.add(4);
        expect(myList.get(0)).to.equal(4);
    });
    it("should have working sort function",function () {
        myList.add(3);
        myList.add(7);
        myList.add(1);
        myList.add(8);
        expect(myList.get(0)).to.equal(1);
        expect(myList.get(1)).to.equal(3);
        expect(myList.get(2)).to.equal(7);
        expect(myList.get(3)).to.equal(8);
    });
    it("should have working remove function and get",function () {
        myList.add(3);
        myList.add(7);
        myList.add(1);
        myList.add(8);
        myList.remove(0);
        expect(myList.get(0)).to.equal(1);
        expect(myList.get(1)).to.equal(7);
        expect(myList.get(2)).to.equal(8);
        expect(myList.size).to.equal(3);
    });
});
