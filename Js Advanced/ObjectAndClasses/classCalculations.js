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
let simpleCalc = new Calculations(10,5,2);
console.log(simpleCalc.calcAreaTrapezoid());
