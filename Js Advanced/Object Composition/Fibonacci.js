function FibNums(nums) {
    let generate = (function () {
        let firstN = 0;
        let secondN = 1;
        return function () {
            let old = firstN;
            firstN = secondN;
            secondN = old + firstN;
            return firstN;
        }
    })();
    let seq = [];
    for(let n = 0;n< nums;n++){
        seq.push(generate());
    }
    return seq;
}
console.log(FibNums(20));