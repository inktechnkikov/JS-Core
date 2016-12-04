class Human {
  constructor(name,age,height,weight) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.location = {
      city:"",
      zipcode:""
    };
  }
  info(city,zipcode){
    this.location.city += city;
    this.location.zipcode += zipcode;
  }
}
let stamat = new Human("Stamat",25,1.50,78);
stamat.info("Plovdiv",5555);
console.log(stamat);
