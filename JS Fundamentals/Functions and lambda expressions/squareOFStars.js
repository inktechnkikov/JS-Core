function squareOFSt(n) {
    function printSt(count = n-1) {
        console.log("*" + " *".repeat(count))
    }
    for(let a = 1; a <= n;a++){
        printSt();
    }
}
squareOFSt(5);
