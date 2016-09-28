function printStar(star) {
    console.log("*".repeat(star));
}
function printTriangle(size) {
    for(let row = 1;row <= size;row++){
        printStar(row);
    }
    for(let row = size-1;row >= 1;row--){
        printStar(row);
    }
}
printTriangle(['10']);