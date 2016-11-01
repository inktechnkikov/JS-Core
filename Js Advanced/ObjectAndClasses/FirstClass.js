class Rectangle {
    constructor(width,height,color){
        this.width = width;
        this.height = height;
        this.color = color;
    }
}
let r = new Rectangle(20,30,'red');
let r2 = new Rectangle(10,10,'blue');
let r3 = new Rectangle(0.2,0.5,'white');
let rectArr = [r,r2,r3];
console.log(rectArr);