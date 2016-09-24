function distanceIn3D(inp) {
    let x = Number(inp[0]);
    let y = Number(inp[1]);
    let z = Number(inp[2]);
    let x1 = Number(inp[3]);
    let y1 = Number(inp[4]);
    let z1 = Number(inp[5]);
    let res = Math.pow((x1-x),2);
    let res1 = Math.pow((y1-y),2);
    let res2 = Math.pow((z1-z),2);
    let dist = Math.sqrt(res + res1 + res2);
    console.log(dist);
}
distanceIn3D(['3.5','0','1','0','2','-1']);
