function circleArea(area) {
    let radius = Number(area[0]);
    let areaCircle = Math.PI * Math.pow(radius,2);
    console.log(areaCircle);
    console.log(Math.round(areaCircle*100) / 100);
}
circleArea(['5']);
