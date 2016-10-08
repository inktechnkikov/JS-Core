function printBill(inp) {
    let item  = inp.filter(x=>!Number(x));
    let sum = inp.filter(x=>Number(x)).map(Number);
    let totalSum = sum.reduce((a,b)=> a + b);
    console.log(`You purchased ${item.join(', ')} for a total sum of ${totalSum}`);
}
printBill(['Cola', '1.35', 'Pancakes', '2.88']);
