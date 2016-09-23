function simpleSum(numbers) {
    let num1 = Number(numbers[0]);
    let num2 = Number(numbers[1]);
    let sum = num1 + num2;
    console.log(sum)
}
function oddOrEven(num) {
    let num1 = Number(num[0]);
    let res = num1 % 2 == 0;
    console.log(res);
}
function mulltiplyNums([num1,num2]) {
    let res = Number(num1) * Number(num2);
    console.log(res);
}
simpleSum(['55','1']);
oddOrEven(['7.2']);
mulltiplyNums(['4','4']);