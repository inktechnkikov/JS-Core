let iife = function () {
    console.log('im iife');
    let n = 1.2;
    let n2 = 0.56;
    console.log(n * n2);
}();
let iife2 = (function () {
   console.log('im another iife');
})();