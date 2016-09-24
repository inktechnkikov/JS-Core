function areaOfRect(inp) {
    let w = Number(inp[0]);
    let h = Number(inp[1]);
    let area = w * h;
    let perimeter = 2*(w + h);
    console.log(area);
    console.log(perimeter);
}
areaOfRect(['1','3']);