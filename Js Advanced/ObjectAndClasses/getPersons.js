
function getPersonsFromArr() {
    class Person {
        constructor(firstName,lastName,age,email){
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }
        toString(){
            let infoForPerson = `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
            return infoForPerson;
        }
    }

    let persons = [
        new Person("Maria","Petrova",22,"mp@yahoo.com"),
        new Person("SoftUni"),
        new Person("Stephan","Nikolov",25),
        new Person("Peter","Kolev",24,"ptr@gmail.com"),
    ];
    return persons;
}
let p = new person("Gerogi","Avramov",28,"georgie@data.bg");
console.log(p.toString());
console.log(getPersonsFromArr());