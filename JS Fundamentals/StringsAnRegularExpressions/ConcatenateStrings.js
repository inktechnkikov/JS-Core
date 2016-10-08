function concatenateRev(arr){
    let joined = arr.join('');
    let compleArr = Array.from(joined);
    let rev = compleArr.reverse();
    let joined1 = rev.join('');
    console.log(joined1);
}
concatenateRev(['i','am','student']);