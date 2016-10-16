function func() {
    return {
        add: function (a,b) {
            return a + b;
        },
        multiplication:function (b,c) {
            return b * c;
        },
        division:function (d,e) {
            return d / e;
        }
    }
}
console.log(func().add(4,4));
console.log(func().multiplication(5,5));
console.log(func().division(100,10));