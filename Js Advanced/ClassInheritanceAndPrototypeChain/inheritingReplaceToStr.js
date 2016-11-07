function toStringExtension() {

    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }
        toString() {
            let className = this.constructor.name;
            return `${className} (name: ${this.name}, email ${this.email})`;
        }
    }
    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }
        toString() {
            let baseStr = super.toString().slice(0, -1);
            return baseStr + `,subject: ${this.subject})`;
        }
    }
    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }
        toString() {
            let baseStr = super.toString().slice(0, -1);
            return baseStr + `,course: ${this.course})`;
        }
    }
    return {
        Person,
        Teacher,
        Student
    }
}
let p = new Person('Stamat','stamat@yahoo.com');
console.log(p.toString());
let t = new Teacher('Zahari','zahari@abv.bg','Computer Science');
console.log(t.toString());
let s = new Student('Ana','ana@abv.bg','course:one');
console.log(s.toString());