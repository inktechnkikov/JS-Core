class Point{
	constructor(x,y){
		this.x = x;
		this.y = y;
	}
	showPoint(){
		let info = `Px:${this.x}; Py:${this.y}`;
		return info;
	}
}
class ColorPoint extends Point{
		constructor(x,y,color){
			super(x,y);
			this.color = color;
		}
		showColorPoint(){
			return super.showPoint() + " " + "in" + " " + this.color;
		}
}
let cp = new ColorPoint(10,20,"red");
let cp2 = new ColorPoint(8,5,"blue");
console.log(cp.showColorPoint());
console.log(cp2.showColorPoint());
console.log(cp instanceof Point);
console.log(cp2 instanceof ColorPoint);