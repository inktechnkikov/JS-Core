function wordsToUpper([str]){
    let strToupper = str.toUpperCase();
    let words = extracWords();
    words = words.filter(w=>w!='');
    return words.join(', ');
    function extracWords() {
        return strToupper.split(/\W+/);
    }
}
console.log(wordsToUpper(['Hi,how are you?']));
