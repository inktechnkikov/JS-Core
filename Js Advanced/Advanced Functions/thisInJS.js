function funk() {
    console.log(this);
}
let obj = {
    name:'Peter',
    age:21,
    f:funk
};
console.log(obj.f());
