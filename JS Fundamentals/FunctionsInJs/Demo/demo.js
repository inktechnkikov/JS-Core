function DoProcess(a,b) {
   let result = a + b;
   console.log(result);
   return result;
}
DoProcess(10,5);

let DoProcessMultiplication = function (b,c) {
    let resultOfMultiplication = b * c;
    console.log(resultOfMultiplication);
    return resultOfMultiplication;
};
DoProcessMultiplication(5,5);
(function () {
    let a = 5;
    let b = 15;
    let result = a + b;
    console.log(result);
  //  return result;
}());

(function (a,b) {
   let result = a-b;
   console.log(result);
   return result;
})(20,10);
