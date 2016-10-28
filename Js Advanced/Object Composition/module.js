let moduleObj = {
    startCount:0,
    increase:function (num) {
        return moduleObj.startCount += num
    },
    decrease:function (num) {
        return moduleObj.startCount -= num
    },
    value:function () {
        return moduleObj.startCount
    },
};
moduleObj.startCount = 2;
console.log(moduleObj.value());
console.log(moduleObj.increase(5));
console.log(moduleObj.decrease(1));
