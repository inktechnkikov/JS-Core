class Calculations{
	constructor(width,height,color){
		[this.width,this.height,this.color] = [width,height,color]; 
	}
	calcRectPerimeter(){
		let perimeter = 2 * (this.width + this.height);
		return perimeter;
	}
	calcRectArea(){
		let area = this.width * this.height + " " + this.color;
		return area;
	}
	calcLengthOfDiagonals(){
		let diagonals = Math.sqrt(Math.pow(this.height,2) + Math.pow(this.width,2)).toFixed(4);
			let res = Math.sqrt(diagonals);
			return res;
	}
}
let simpleCalc = new Calculations(5,12,"blue");
console.log(simpleCalc.calcRectPerimeter());
console.log(simpleCalc.calcRectArea());
console.log(simpleCalc.calcLengthOfDiagonals());