class areaTrap{
	constructor(base1,base2,high){
		this.base1 = base1;
		this.base2 = base2;
		this.high = high;
	}
	calcRes(){
		let info = (this.base1 + this.base2) / 2 * this.high;
		return info;
	}
}
let tr = new areaTrap(6,4,3);
console.log(tr.calcRes());