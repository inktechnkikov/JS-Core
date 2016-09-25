function impUnits([inch]) {
    inch = Number(inch);
    let foot = 12;
    let oneInch = inch / foot;
    let foots = inch % foot;
    let res = Math.floor(oneInch) + "'" + "-" + foots + '"';
    console.log(res);
}
impUnits(['36']);