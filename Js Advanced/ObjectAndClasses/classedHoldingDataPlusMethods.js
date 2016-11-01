class RectPlusData {
    constructor(width,height,color){
        [this.width,this.height,this.color] = [width,height,color];
    }
    calcArea(){
        let areaOfRectangle = this.width * this.height;
        return areaOfRectangle;
    }
    calcPerimeter(){
        let perimeterOfRectangle = 2 * (this.width + this.height);
        return perimeterOfRectangle;
    }
}
let rectArea = new RectPlusData(4,5,'purple');
let rectPerimeter = new RectPlusData(6,5,'brown');
console.log(rectArea.calcArea());
console.log(rectPerimeter.calcPerimeter());


