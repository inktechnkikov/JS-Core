function compound(inp) {
    let principalSum = Number(inp[0]);
    let interest = Number(inp[1]);
    let months = Number(inp[2]);
    let timeSpan = Number(inp[3]);

    interest /= 100;
    let freq = 12 / months;
    let res = principalSum * Math.pow(1 + interest / freq,freq*timeSpan);
    console.log(res.toFixed(2));
}
compound(['1500','4.3','3','6']);