function processOdd(arr) {
    let res = arr.filter((num,i)=> i%2 == 1).map(x => 2*x).reverse();
    console.log(res.join(' '));
}
processOdd(['10','15','20','25']);