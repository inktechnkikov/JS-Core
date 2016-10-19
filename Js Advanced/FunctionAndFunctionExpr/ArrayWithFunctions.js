let arr = [
    function a1() {
        console.log('first function');
    },
    function a2() {
      console.log('second function');
    },
    function a3() {
        console.log('third function');
    }
];
for(let a = 0;a < arr.length;a++){
    arr[a]();
}