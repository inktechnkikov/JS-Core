class Person {
    constructor(name,age,weight,height,sex){
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
        this.gender = sex;
    }
}
let person = new Person("Pesho",27,90,1.80,'male');
let person1 = new Person("Stamat",25,98,'male');
let person2 = new Person();
console.log(person);
console.log(person1);
console.log(person2);
person.age = 30;
console.log(person);
console.log(person.age);