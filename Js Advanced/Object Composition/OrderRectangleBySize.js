function createRect(width,height) {
    let rect = {
        width: width,
        height: height,
        area: () => rect.width * rect.height,
        compareTo: function (anotherRect) {
            let res = anotherRect.area() - rect.area();
            return res || (anotherRect.width - rect.width);
        }
    };
    return rect;
}
    function orderRect(recData) {
        let rects = [];
        for (let [width,height] of recData) {
            let rect = createRect(width, height);
            rects.push(rect);
        }
        rects.sort((a, b) => a.compareTo(b));
        return rects;
    }

orderRect([[10,5], [3,20], [5,12]]);