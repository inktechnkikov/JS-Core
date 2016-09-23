function filterByage([minAge,nameA,ageA,nameB,ageB]) {
    let firstPerson = {
        name:nameA, age:Number(ageA)
    };
    let secondPerson = {
        name:nameB, age:Number(ageB)
    };
    if(firstPerson.age >= minAge){
        console.log(firstPerson);
    }
    if(secondPerson.age >= minAge){
        console.log(secondPerson);
    }
}
filterByage(['13','Stamatat','14','Djohn','13.5']);