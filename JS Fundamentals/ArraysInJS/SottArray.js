function sort(arr) {
    let sort = arr.sort((a,b)=>a-b);
    console.log(sort);
    let reverseSort = arr.sort((a,b)=>b-a);
    console.log(reverseSort);
}
sort(['1','5','10','22','-1','2','4']);
