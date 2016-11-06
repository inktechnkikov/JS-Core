class cars{
    constructor(color,engine,type){
        this.color = color;
        this.engine = engine;
        this.type = type;
    }
}
let firstCar = new cars('red',2000,'CDI');
console.log(`Color ${firstCar.color}, Engine ${firstCar.engine}, Type ${firstCar.type}`);
class Mercedes extends cars{
    constructor(color,engine,type, autopilot){
        super(color,engine,type);
        this.autopilot = autopilot;
    }
    selfDrive(){
        console.log(`${this.type} engines have this option --> ${this.autopilot}`);
    }
}
let merc = new Mercedes('Black',2000,'CDI','autopilot');
console.log(`Color ${merc.color} engine ${merc.engine} type ${merc.type} option ${merc.autopilot}`);
merc.selfDrive();