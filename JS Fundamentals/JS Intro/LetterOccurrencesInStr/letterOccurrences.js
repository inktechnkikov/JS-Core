function occurrences([str1,str2,str3]) {
  console.log(str1);
    console.log(str2);
    console.log(str3);
}
function occurencesNumb([str,letter]) {
    let counter = 0;
    for(let l = 0;l<str.length;l++){
        if(str[l] == letter){
            counter++;
        }
    }
    console.log(counter);
}
occurencesNumb(['hello','e']);