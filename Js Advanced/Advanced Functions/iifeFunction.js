(function (arr) {
    let sum = 0;
    for(let s of arr){
        sum += Number(s);
    }
    console.log(sum);
})(['10','20']);
