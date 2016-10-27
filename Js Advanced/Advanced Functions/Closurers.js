let closur = (function () {
    let counter = 1;
    return function () {
        console.log(++counter);
    }
})();
