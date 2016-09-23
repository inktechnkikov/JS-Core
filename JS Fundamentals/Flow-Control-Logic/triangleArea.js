function traingleArea(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let c = Number(input[2]);
    let s = (a + b + c) / 2;
   let area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
    console.log(area);
}
function triangleAreaHeronFormula([a,b,c]) {
    let S = (Number(a) + Number(b) + Number(c)) / 2;
    let Area = Math.sqrt(S*(S-a)*(S-b)*(S-c));
    console.log(Area);
}
traingleArea(['2','3.5','4']);
triangleAreaHeronFormula(['2','3.5','4']);