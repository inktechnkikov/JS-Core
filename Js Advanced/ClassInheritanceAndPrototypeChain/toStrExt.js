class Person{
	constructor(name,email){
		this.name = name;
		this.email = email;
	}
	 toString(){
		let clName = this.constructor.name;
		return `${clName} (name: ${this.name}, email: ${this.email})`;
	}
}
class Teacher extends Person{
	constructor(name,email,subject){
		super(name,email);
		this.subject = subject;
	}
	 toStringTeacher(){
		let baseStrTeacher = super.toString().slice(0,-1);
		return baseStrTeacher + `, subject: ${this.subject})`;
	}
}
class Student extends Person{
	constructor(name,email,course){
		super(name,email);
		this.course = course;
	}
	toStringStudent(){
		let baseStrStudent = super.toString().slice(0,-1);
		return baseStrStudent + `, course: ${this.course})`;
	}
}
let pers = new Person("Mario","marius@abv.bg");
console.log(pers.toString());
let teacher = new Teacher("Trump","school@data.com","Web Basic");
console.log(teacher.toStringTeacher());
let student = new Student("Elmo","elmo@gmail.com",4);
console.log(student.toStringStudent());