function checkIfInValue(input) {
    for (let i = 0; i < input.length; i+=3) {
        let xInput = input[i];
        let yInput = input[i+1];
        let zInput = input[i+2];

        if (inVolume(xInput, yInput, zInput)) {
            console.log('inside');
        }
        else {
            console.log('outside');
        }

        function inVolume(x, y, z) {
            let x1 = 10;
            let x2 = 50;
            let y1 = 20;
            let y2 = 80;
            let z1 = 15;
            let z2 = 50;

            if (x >= x1 && x <= x2) {
                if (y >= y1 && y <= y2) {
                    if (z >= z1 && z <= z2) {
                        return true;
                    }
                }
            }
            return false;
        }
    }
}
checkIfInValue(['8','20','22']);
checkIfInValue(['13.1','50','31.5','50','80','50','-5','18','43']);

