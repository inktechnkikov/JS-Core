function patient(pName,age,weight,height) {
    let n = {};
    n.name = pName;
     n.personalInfo = {
        age:age,
        weight:Math.round(Number(weight)),
        height:Math.round(Number(height))
    };
    function bmi(w,h) {
        w = Number(w);
        h = Number(h) / 100;
        let msIndex = w / (h*h);
        return msIndex;
    }
   n.BMI = Math.round(bmi(weight,height));
    let status = '';
    if(n.BMI < 18.5){
        status = 'underweight';
    }
    else if(n.BMI < 25){
        status = 'normal';
    }
    else if(n.BMI < 30){
        status = 'overweight';
    }

    if(n.BMI >= 30){
        status = 'obese';
        n.recommendation = 'admission required';
    }
    n.status = status;
    return n;
}
console.log(patient('Honey Boo Boo', 9, 57, 137));