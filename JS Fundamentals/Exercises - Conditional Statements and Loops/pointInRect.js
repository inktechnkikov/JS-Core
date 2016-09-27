function pointInRect(inp){
    let x = Number(inp[0]);
    let y = Number(inp[1]);
    let xMin = Number(inp[2]);
    let xMax = Number(inp[3]);
    let yMin = Number(inp[4]);
    let yMax = Number(inp[5]);
    if(x >= xMin && x <= xMax && y >= yMin && y <= yMax){
        console.log('inside');
    }
    else{
        console.log('outside');
    }
}
pointInRect(['8','-1','2','12','-3','3']);
