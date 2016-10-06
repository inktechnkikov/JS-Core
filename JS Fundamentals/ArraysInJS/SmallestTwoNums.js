function smallest(arr){
    arr.sort((a,b)=>a-b);
    let res = arr.slice(0,2);
    console.log(res.join(' '));
}
smallest(['30','15','50','5']);