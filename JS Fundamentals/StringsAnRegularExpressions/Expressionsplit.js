function split(inp){
    let expr = inp[0];
    let elements = expr.split(/[\s.();,]+/).filter(x=>x!='');
    console.log(elements.join('\n'));
}
split(['let sum = 4 * 4,b = "wow";']);