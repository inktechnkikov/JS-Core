let rect = {
    width:10,
    height:4,
    grow:function (w,h) {
        this.width += w;
        this.height += h;
    },
    print:function () {
        console.log(`[${this.width} x ${this.height}]`);
    }
};
rect.grow(5,5);
rect.print();