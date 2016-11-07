function personAndTeach() {

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
 //  class Student extends Person {
 //      constructor(name, email, course) {
 //          super(name, email);
 //          this.course = course;
 //      }

 //      toString() {//
 //          let baseStr = super.toString().slice(0, -1);
 //          return baseStr + `,course: ${this.course})`;
 //      }
 //  }
    function extendProtype(baseClass) {
        baseClass.prototype.species = 'Human';
        baseClass.prototype.toSpeciesString = function () {
            return `I am a ${this.species}. ${this.toString()}`;
        }
    }

    extendProtype(Person);
    return{Person,Teacher}
}
   let h = new Person('Goshko','abv,bg');
console.log(h.toSpeciesString());
    let teach = new Teacher('Jane','jane@@','c++');
    console.log(teach.toSpeciesString());
    let st = new Student('Emo','emo@gmail.com','php');
    console.log(st.toSpeciesString());