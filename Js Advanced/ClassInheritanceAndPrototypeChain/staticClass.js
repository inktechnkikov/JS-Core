class Greeting {
	static sayHello(){
		return "Hello";
	}
	static sayGoodBye(){
		return "Goodbye";
	}
}
class Robot extends Greeting{
	static talkRobot(){
		return super.sayHello() + " " + "im robot";
	}
	static goodBye(){
		return super.sayGoodBye() + " " + "im robot";
	}
}
console.log(Robot.talkRobot());
console.log(Robot.goodBye());