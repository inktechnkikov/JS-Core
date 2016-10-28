let module2 = (function () {
    let counter = 0;
    return{
        increased: (numIncresed) => counter += numIncresed,
        decresed: (numDecreased) => counter -= numDecreased,
        valueOfCounter: () => counter,
    };
})();
console.log(module2.valueOfCounter());
console.log(module2.increased(2));
console.log(module2.decresed(10));