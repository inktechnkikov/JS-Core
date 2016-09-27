function triangle(inp){
    let r = Number(inp[0]);
    let sym = "";
    for(let row = 1;row <= r;row++){
        sym += '$';
        console.log(sym);
    }

}
triangle([10]);
