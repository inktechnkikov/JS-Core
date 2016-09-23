function boxesAndbottles(inp) {
    let bottles = Number(inp[0]);
    let boxes = Number(inp[1]);
    let res = Math.ceil(bottles / boxes);
    console.log(res);
}
function print(size) {
    size = size || 0;
    console.log("size = " + size);
}
boxesAndbottles(['15','7']);
print();
