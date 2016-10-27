function calcAgr(arr) {
    let resReduced = arr.reduce((a, a1) => Number(a) + Number(a1));
    console.log("Sum = " + resReduced);
    let minNumber = arr.reduce((a, a1) => Math.min(a, a1));
    console.log("Min = " + minNumber);
    let maxNumber = arr.reduce((a, a1) => Math.max(a, a1));
    console.log("Max = " + maxNumber);
    let product = arr.reduce((a, a1) => Number(a) * Number(a1));
    console.log('Product = ' + product);
    let joined = arr.reduce((a, a1) => a + a1);
    console.log('Join = ' + joined);

}
calcAgr(['2', '3', '10', '5']);
