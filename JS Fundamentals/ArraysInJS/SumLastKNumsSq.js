function sumLastKNumsS([n,k]) {
    let seq = [1];
    for(let current = 1;current < n;current++){
        let start = Math.max(0,current-k);
        let end = current-1;
        let sum = 0;
         for(let s = start;s <= end;s++){
             sum += seq[s];
         }
         seq[current] = sum;
    }
    console.log(seq.join(' '));
}
sumLastKNumsS(['6','3']);