function extract(str){
    if(Array.isArray(str)) str = str[0];
    let result = [];
    let rightPar = -1;
    while (true){
        let leftPar = str.indexOf('(',rightPar+1);
        if(leftPar == -1){
            break;
        }
         rightPar = str.indexOf(')',leftPar+1);
        if(rightPar == -1){
            break;
        }
        let text = str.substring(leftPar+1,rightPar);
        result.push(text);
    }
    return result.join(', ');
}
console.log(extract(['Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)']));