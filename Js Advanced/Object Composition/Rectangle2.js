let rect2 ={
    width:10,
    height:20,
    grow:function (w,h) {
        rect2.width += w;
        rect2.height += h;
    },
    printResult:function () {
        console.log(rect2.width * rect2.height);
    }
};
rect2.grow(10,10);
rect2.printResult();
console.log(rect2);