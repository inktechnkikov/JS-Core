let arr = Array(5);
arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
arr[3] = 4;
arr[4] = 5;
let n = arr.length;
let res = 0;
for(let a = 0;a < arr.length;a++){
    res+=arr[a];
}
console.log(res);
