function cookNumber(args) {
    let number = Number(args[0]);

    for (let i = 1; i < args.length; i++) {

        let command = args[i];

        switch (command) {
            case 'chop': number /= 2; break;
            case 'dice': number = Math.sqrt(number); break;
            case 'spice': number += 1; break;
            case 'bake': number *= 3; break;
            case 'fillet': number =  number - (number * 0.20);
        }

        console.log(number)
    }
}

cookNumber(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);
