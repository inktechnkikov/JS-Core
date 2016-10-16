function negativepos(arr) {
    arr = arr.map(Number);
    let res = [];
    for(n of arr){
        if(n < 0){
            res.unshift(n);
        }
        else {
            res.shift(n);
        }
    }
    console.log(res.join('\n'));
}
negativepos(['1','3','5','-1','0']);