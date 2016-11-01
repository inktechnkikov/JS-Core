class Person1 {
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    toString() {
        let info = `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
        return info;
    }
}
   function getPersons(){
        return [
            new Person1("Maria","Petrova",22,"mp@yahoo.com"),
            new Person1("SoftUni"),
            new Person1("Stephan","Nikolov",25),
            new Person1("Peter", "Kolev",24,"ptr@gmail.com"),
        ];
    }

let person = new Person1('Maria','Petrova',22,'mp@yahoo.com');
console.log(person.toString());
console.log(getPersons().join("|"));
