function cens(inp) {
    let text = inp[0];
    let words = inp.slice(1);
    for(let w of words){
        let replaced = '-'.repeat(w.length);
        let regex = new RegExp(w,'g');
        text = text.replace(regex,replaced);
    }
    console.log(text);
}
cens(['roses are red, violets are blue', ', violets are', 'red']);