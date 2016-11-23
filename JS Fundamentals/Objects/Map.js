let score = new Map();
score.set("Peter",130);
score.set("Maria",86);
for(let [n,s] of score){
    console.log(n + '->' + s);
}
let phonebook = new Map();
phonebook.set("Stamat",120);
phonebook.set("Sahil Jai",100);
for(let [j,g] of phonebook){
    console.log(j + '->' + g);
}
console.log(phonebook.has('Stamat'));
console.log(phonebook.get('Stamat'));
console.log(phonebook.get('Sahil Jai'));

