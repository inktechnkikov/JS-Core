function multiply(a,b) {
    let result = a * b;
    return result;
}
function check(a) {
    if(a > 0){
        return "positive";
    }
    if(a < 0){
        return "negative";
    }
}
console.log(multiply(4,6));
console.log(check(7));