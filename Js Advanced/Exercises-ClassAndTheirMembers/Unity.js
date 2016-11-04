class Rat {
    constructor(name) {
        this.name = name;
        this.groupOfRata = [];
    }

    unite(otherRats) {
        if (otherRats instanceof Rat) {
            this.groupOfRata.push(otherRats);
        }
    }
    getRats(){
        return this.groupOfRata;
    }
    toString(){
        let party = this.name;
        for(let rat of this.groupOfRata){
            party+= `##${rat}`;
        }
        return party;
    }
}
let kingOfRats = new Rat('MickeyMouse');
kingOfRats.unite(new Rat('Jerry'));
kingOfRats.unite(new Rat('Balin'));
console.log(kingOfRats.getRats());
console.log(kingOfRats.toString());


