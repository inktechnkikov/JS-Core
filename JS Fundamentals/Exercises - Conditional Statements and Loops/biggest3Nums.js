function bigget3num(inp) {
    let num1 = Number(inp[0]);
    let num2 = Number(inp[1]);
    let num3 = Number(inp[2]);
    let biggestNum = Math.max(num1,num2,num3);
    console.log(biggestNum);
}
bigget3num(['5','-2','7']);