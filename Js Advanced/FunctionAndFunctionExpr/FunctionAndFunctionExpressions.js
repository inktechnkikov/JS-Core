function max(arr) {
    let maxValue = arr[0];
    for (let a = 1; a < arr.length; a++) {
        maxValue = Math.max(maxValue, arr[a]);
    }
    return maxValue;
}
    function min(arrMin) {
        let minValue = arrMin[0];
        for(let m = 1;m < arrMin.length;m++){
            minValue = Math.min(minValue,arrMin[m]);
        }
        return minValue;
    }

console.log(max(['1','2','3','4','100']));
console.log(min(['1','2','3','4','100']));
