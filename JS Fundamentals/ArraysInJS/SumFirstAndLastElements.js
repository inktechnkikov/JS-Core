function sum(arr) {
    let num1 = Number(arr[0]);
    let num2 = Number(arr[arr.length-1]);
   return num1 + num2;
}
console.log(sum([10,20,30,40]));