let counter = (function () {
    let num = 0;
    return function () {
        console.log(++num);
    }
})();
counter();
