class Calculations{
	constructor(width,height,high){
		[this.width,this.height,this.high] = [width,height,high]; 
	}
	calcRectPerimeter(){
		let perimeter = 2 * (this.width + this.height);
		return perimeter;
	}
	calcRectArea(){
		let area = this.width * this.height;
		return area;
	}
	calcLengthOfDiagonals(){
		let diagonals = Math.sqrt(Math.pow(this.height,2) + Math.pow(this.width,2)).toFixed(4);
			let res = Math.sqrt(diagonals);
			return res;
	}
	calcAreaTrapezoid(){
		let areaOfTrapezoid = (this.width + this.height) / 2 * this.high;
		return areaOfTrapezoid;
	}

}
let rectPerimet = new Calculations(5,4);
let rectArea = new Calculations(6,3);
let diagonalsLenght = new Calculations(12,5);
let trapezoidArea = new Calculations(6,4,3);
console.log(`Rectangle Perimeter: ${rectPerimet.calcRectPerimeter()}`);
console.log(`Rectangle Area: ${rectArea.calcRectArea()}`);
console.log(`Rectangle Diagonals: ${diagonalsLenght.calcLengthOfDiagonals()}`);
console.log(`Trapezoid Area: ${trapezoidArea.calcAreaTrapezoid()}`);