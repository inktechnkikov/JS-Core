let rect = {
    width:1,
    height:2,
    grow:function (w,h) {
        rect.width += w;
        rect.height += h;
    },
    printInfo:function () {
        console.log(rect.width + rect.height);
    }

};
let rect2 = {
    width:12,
    height:10,
    grow:function (w,h) {
        rect2.width += w;
        rect2.height += h;
    },
    info:function () {
        console.log(rect2.width+ rect2.height);
    }
};
console.log([rect.printInfo(1,1),rect2.info(2,2)].join(','));