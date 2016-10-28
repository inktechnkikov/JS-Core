let car = {
    brand: 'BMW',
    moidel: 'X5',
    color: 'blue',
    toStr: function () {
        return `[brand:${this.brand}, model:${this.moidel}, color:${this.color}]`;
    }
};
console.log('' + car);
let myCar = Object.create(car);
myCar.moidel = 'M4';
myCar.color = 'red';
myCar.toStr = function () {
    return `[brand: ${this.}`
}

