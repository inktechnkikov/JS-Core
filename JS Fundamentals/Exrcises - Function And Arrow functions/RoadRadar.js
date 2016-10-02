function radar(input) {
    let speed = Number(input[0]);
    let area = String(input[1]);
    function speedInArea(area) {
        switch(area){
            case 'motorway': return 130;
            case 'interstate': return 90;
            case 'city': return 50;
            case 'residential': return 20;
        }
    }
    let overspeed = speed - speedInArea(area);
    if(overspeed > 0 && overspeed <= 20){
        console.log('speeding');
    }
    else if(overspeed > 20 && overspeed <= 40){
        console.log('excessive speeding');
    }
    else if(overspeed > 40){
        console.log('reckless driving');
    }

}
radar(['120','city']);
