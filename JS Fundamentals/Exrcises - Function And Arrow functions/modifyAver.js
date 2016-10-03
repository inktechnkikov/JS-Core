
function modifyAvg(args) {
    let number = args[0];



    while (true) {
        let currentAvg = checkIfAvgIsOK(number);
        if (currentAvg > 5) {
            break;
        } else {
            number += 9;
        }
    }

    console.log(number);

    function checkIfAvgIsOK(numberAsStr) {
        let len = numberAsStr.length;

        let num = parseInt(numberAsStr);

        let sum = 0;


        while (num > 0) {
            sum += Math.floor(num % 10);
            num = num / 10;
        }

        return sum / len;

    }
}
