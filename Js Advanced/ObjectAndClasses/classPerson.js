class Person {
    constructor(name,age,weight,height,sex){
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
    }
}
let person = new Person("Pesho",27,90,1.80);
let person1 = new Person("Stamat",25,98);
let person2 = new Person();
console.log(person);
console.log(person1);
console.log(person2);