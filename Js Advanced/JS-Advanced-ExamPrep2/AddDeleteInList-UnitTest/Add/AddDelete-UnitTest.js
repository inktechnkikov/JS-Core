let expect = require('chai').expect;
function produce(){
    let data = [];
    return {
        add: function(item) {
            data.push(item);
        },
        delete: function(index) {
            if (Number.isInteger(index) && index >= 0 && index < data.length) {
                return data.splice(index, 1)[0];
            } else {
                return undefined;
            }
        },
        toString: function() {
            return data.join(", ");
        }
    };
};//
describe('list',function () {
  // let list = {};//
  // beforeEach(function () {
  //   list = produce();
  // });
    it('constructor must produce object with correct functions', function () {
        expect(typeof(list.add)).to.equal('function');
        expect(typeof(list.delete)).to.equal('function');
        expect(typeof(list.toString)).to.equal('function');
    });
    it('constructor should produce and empty list', function () {
        expect(list.toString()).to.equal('', 'toString didnt produce expected result');
    });
    describe('add', function () {
        it('it should add a correct value', function () {
            list.add(5);
            expect(list.toString()).to.equal('5', 'Add function didnt work corrcet');
        });
        it('should add correct amount of times', function () {
            list.add('Pesho');
            expect(list.toString()).to.equal('Pesho', 'Add function didnt add correct value');
        });
        it('should add correct place', function () {
            list.add('Pesho');
            list.add('Stamat');
            list.add('Gosho');
            expect(list.toString()).to.equal('Pesho, Stamat, Gosho', 'Add function didnt added elements in correct order');
        })
    });
    describe('delete', function () {
        it('if input is string should return undefined', function () {
            expect(list.delete('Pesho')).to.equal(undefined, 'Delete didnt return the exptected value');
        });
        it('if input is floating point number should return undefined', function () {
            expect(list.delete(3.14)).to.equal(undefined, 'Delete didint return the expected value');
        });
        it('if input is floating point number should not delete any elements', function () {
            list.add(20);
            list.delete(3.14);
            expect(list.toString()).to.equal('20', 'Floating num is deleted');
        });
        it('if input is 0 and there no other elements in list', function () {
            expect(list.delete(0)).to.equal(undefined, 'This element cant be deleted');
        });
        it('if input is index equal to the length of list', function () {
            list.add(11);
            list.add('second');
            expect(list.delete(2)).to.equal(undefined, 'there is not such element');
        });
        it('if input is 1 should delete the correct index', function () {
            list.add(1);
            list.add(10);
            expect(list.delete(1)).to.equal(10, 'Number at the selected index is deleted');
        });
        it('if input is 2 the other elements have to be available', function () {
            list.add(1);
            list.add(12);
            list.add(40);
            list.add(14);
            list.delete(2);
            expect(list.toString()).to.equal('1, 12, 14', 'Input deleted the correct element');
        });
        it('if input is 2 and 4 the other elements have to be available', function () {
            list.add(1);
            list.add(12);
            list.add(40);
            list.add(14);
            list.add(45);
            list.add(205);
            list.delete(2);
            list.delete(4);
            expect(list.toString()).to.equal('1, 12, 14, 45', 'Input deleted the correct elements');
        });
        it('if input is out of range in list',function () {
            list.add(1);
            list.add('momo');
            list.add(20);
            list.add('jedai');
            list.delete(5);
           expect(list.delete(5)).to.equal(undefined);
            expect(list.toString()).to.equal('1, momo, 20, jedai');
        })
    });
});
