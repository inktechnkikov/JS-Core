function oddOrEven(inp) {
    let n = Number(inp[0]);
    if(n % 2 == 0){
        console.log("even");
    }
    else if(n == Math.round(n)){
        console.log("odd");
    }
    else{
        console.log("invalid");
    }
}
oddOrEven(['1.5']);