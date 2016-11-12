function* oddNums() {
    let num = -1;
    while (true){
        yield num = num + 2;
    }
}
let odd = oddNums();
console.log(odd.next());
console.log(odd.next());