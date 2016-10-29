let solved =  (function () {
    let totalSum = 0;
    return function calc(n) {
        totalSum += n;
        calc.toString = () => totalSum;
        return calc;
    }
})();
console.log(solved(10)(2)(-5).toString());