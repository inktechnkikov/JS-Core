function st(inp) {
    let [n] = inp.map(Number);
    if(n == 4){
        n = n + 1;
        console.log(n);
    }
}
function evenOrOdd(num) {
    let [n] = num.map(Number);
    if(n % 2 == 0){
        console.log("Even number");
    }
    else{
        console.log("Odd number");
    }
}
st(['4']);
evenOrOdd(['8']);