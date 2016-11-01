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
    calcDiagonals(){
        let diagonalsLenght = Math.sqrt(Math.pow(this.width,2) + Math.pow(this.height,2)).toFixed(4);
        return diagonalsLenght;
    }
}
let rectArea = new RectPlusData(4,5,'purple');
let rectPerimeter = new RectPlusData(6,5,'brown');
let rectDiagonals = new RectPlusData(5,5);
console.log(rectArea.calcArea());
console.log(rectPerimeter.calcPerimeter());
console.log(rectDiagonals.calcDiagonals());

