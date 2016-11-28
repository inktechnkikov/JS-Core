class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    showPoint(){
        return `Px:${this.x} Py:${this.y}`;
    }
}
let p = new Point(25,8);
console.log(p.showPoint());