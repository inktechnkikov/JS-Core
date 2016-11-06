class Person {
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
}
let p = new Person('Pe6o','pesho@abv.bg');
console.log(`Person: ${p.name}\nemail: ${p.email}`);

class Teacher extends Person{
    constructor(name,email,subject){
        super(name,email);
        this.subject = subject;
    }
    teach(){
        console.log(`${this.name} is teaching ${this.subject}`);
    }
}
let t = new Teacher('Ivan','ivanco@mail.bg','Math');
console.log(`Teacher: ${t.name}\nemail: ${t.email}\nsubject: ${t.subject}`);
t.teach();