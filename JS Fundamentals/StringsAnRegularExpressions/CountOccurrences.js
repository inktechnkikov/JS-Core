function occurences([targer,text]) {
    let counter = 0;
        let position = -1;
    while(true) {
     position = text.indexOf(targer, position+1);
    if(position == -1) {
        return counter;
    }
        else {
            counter++;
        }
    }
}
console.log(occurences(['the','the quick brown fox jumps over the lay dog.']));
