function evenPos(arr) {
    let result = [];
    for(let i in arr){
        if(i%2 == 0){
            result.push(arr[i]);
        }
    }
    return result.join(' ');
}
console.log(evenPos([1,2,4,5,6,7]));