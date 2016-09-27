function nums(inp) {
    let num = Number(inp[0]);
    for(let n = 1;n <= num;n++){
        if(n % 2 != 0){
            console.log(n);
        }
    }
}
nums(['5']);
