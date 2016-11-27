class PersonInfo{
	constructor(firstName,lastName,age,gender,weight,height){
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
		this.gender = gender;
		this.weight = weight;
		this.height = height;
	}
	toString(){
		let showInfo = `First name - ${this.firstName}\n Last name - ${this.lastName}\n Age - ${this.age}
			Gender - ${this.gender}\n Weight - ${this.weight}\n Height - ${this.height}`;
			return showInfo;
	}
	showEducation(){
		let showEducationInfo = {
			school:"American College",
			course:"First Course",
			score:5.5
		}
		return showEducationInfo;
	}
}
let student = new PersonInfo("Batman","Knight",15,"m",55,1.60);
console.log(student.toString());
console.log(student.showEducation());
