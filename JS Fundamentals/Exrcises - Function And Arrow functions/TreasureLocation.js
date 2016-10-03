function locate(args) {
    for (let i = 0; i < args.length; i+=2) {
        let x = +args[i];
        let y = +args[i + 1];

        console.log(checkIfTuvalu(x, y) ||
            checkIfTokelau(x, y) ||
            checkIfSamoa(x, y) ||
            checkIfTonga(x, y) ||
            checkIfCook(x, y) ||
            'On the bottom of the ocean');

    }

    function checkIfTuvalu(x, y) {
        if ((x >= 1 && x <= 3) && (y >= 1 && y <= 3)) {
            return 'Tuvalu';
        }
    }

    function checkIfTokelau(x, y) {
        if ((x >= 8 && x <= 9) && (y >= 0 && y <= 1)) {
            return 'Tokelau';
        }
    }

    function checkIfSamoa(x, y) {
        if ((x >= 5 && x <= 7) && (y >= 3 && y <= 6)) {
            return 'Samoa';
        }
    }

    function checkIfTonga(x, y) {
        if ((x >= 0 && x <= 2) && (y >= 6 && y <= 8)) {
            return 'Tonga';
        }
    }

    function checkIfCook(x, y) {
        if ((x >= 4 && x <= 9) && (y >= 7 && y <= 8)) {
            return 'Cook';
        }
    }
}
locate(['4', '2', '1.5', '6.5', '1', '3']);
