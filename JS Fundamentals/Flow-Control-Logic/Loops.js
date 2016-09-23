function Loop(num) {
    let n = Number(num[0]);
    let str = '';
    for(let a = 0;a < n;a++){
        str += a + ",";
    }
    console.log(str);
}
function simpleLoop(inp) {
    let [num] = inp.map(Number);
    for(let a = 100;a >= num;a-=10){
        console.log(a);
    }
}
Loop(['115']);
simpleLoop(['10']);