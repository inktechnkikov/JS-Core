let maria = {
    name: "Maria",
    hello: function (thing) {
        console.log(this.name + " says hello " + thing);
    }
};
maria.hello('world');
let ivan = {
    name:"Ivan"
};
maria.hello.call(ivan,"now");