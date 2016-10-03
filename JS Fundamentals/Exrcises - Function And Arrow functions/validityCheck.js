function checkValidity(args) {
    let x1 = +args[0];
    let y1 = +args[1];
    let x2 = +args[2];
    let y2 = +args[3];

    let distanceX = Math.pow(x1, 2);
    let distanceY = Math.pow(y1, 2);

    let distance = Math.sqrt(distanceX + distanceY);

    if (distance == Math.round(distance)) {
        console.log('{' + `${x1}, ${y1}` + '} to {0, 0} is valid');
    } else {
        console.log('{' + `${x1}, ${y1}` + '} to {0, 0} is invalid');
    }

    distanceX = Math.pow(x2, 2);
    distanceY = Math.pow(y2, 2);

    distance = Math.sqrt(distanceX + distanceY);

    if (distance == Math.round(distance)) {
        console.log('{' + `${x2}, ${y2}` + '} to {0, 0} is valid');
    } else {
        console.log('{' + `${x2}, ${y2}` + '} to {0, 0} is invalid');
    }

    distanceX = Math.pow(x1 - x2, 2);
    distanceY = Math.pow(y1 - y2, 2);

    distance = Math.sqrt(distanceX + distanceY);

    if (distance == Math.round(distance)) {
        console.log('{' + `${x1}, ${y1}` + '} to {' + `${x2}, ${y2}` + '} is valid');
    } else {
        console.log('{' + `${x1}, ${y1}` + '} to {' + `${x2}, ${y2}` + '} is invalid');
    }
}