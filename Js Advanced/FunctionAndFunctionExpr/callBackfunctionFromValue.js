let obj = {
    fromObject:function () {
        console.log('you call me from this object');
    }
};
let value = function () {
    console.log('you call me from this value');
};
obj.fromObject();
value();