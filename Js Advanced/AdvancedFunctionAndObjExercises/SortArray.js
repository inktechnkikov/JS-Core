function sortArr(inputArr,sortMethod) {
    let ascending = function (a,b) {
        return a -b;
    };
    let descending = function (a,b) {
        return b-a;
    };
    let sortStrateg = {
        'asc': ascending,
        'desc': descending,
    };
    return inputArr.sort(sortStrateg[sortMethod]);
}
console.log(sortArr([14,7,17,6,8], 'asc'));