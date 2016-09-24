function distance(inp) {
    let obj1Speed = Number(inp[0]);
    let obj2Speed = Number(inp[1]);
    let time = Number(inp[2]);
    let dist1 = obj1Speed / 3600*time;
    let dist2 = obj2Speed / 3600*time;
    let distBetween = Math.abs(dist1 - dist2) * 1000;
    console.log(distBetween);
}
distance(['11','10','120']);