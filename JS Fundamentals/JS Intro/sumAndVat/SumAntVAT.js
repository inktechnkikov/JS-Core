function sumVar(input) {
    let sum = 0;
    for(let n of input) {
        sum += Number(n);
    }
        console.log("sum = " + sum);
        console.log("VAT = " + sum * 0.20);
        console.log("total = " + sum * 1.20);
}
sumVar(['10','23']);