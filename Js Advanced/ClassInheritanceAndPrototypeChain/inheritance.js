class Human{
	constructor(name,age,height,width){
		this.name = name;
		this.age = age;
		this.height = height;
		this.width = width;
	}
}
let human = new Human("Stamat",23,76,1.64);
console.log(`Human:\nname: ${human.name}\n Age: ${human.age}\n Height: ${human.height}\n Width: ${human.width}`);

class Human2 extends Human{
	constructor(name,age,height,width,email){
		super(name,age,height,width);
		this.email = email;
	}
}
let human2 = new Human2("Dancho",24,66,1.77,"store@data.bg");
console.log(`Human2:name: ${human2.name}\n
 Age: ${human2.age}
  Height: ${human2.height}
   Width: ${human2.width}
    Email: ${human2.email}`);