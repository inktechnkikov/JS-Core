function printLetters(arr) {
    if(Array.isArray(arr));
    arr = arr[0];
    for(let l in arr){
        console.log(`str[${l}] -> ${arr[l]}`);
    }
}
printLetters(['SoftUni']);