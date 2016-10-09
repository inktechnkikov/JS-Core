function validateEmail([mail]) {
    let patern = /^[a-zA-Z0-9\._]+\@[a-z]+(\.[a-z]+$)/g;
    let res = patern.test(mail);
    if(res){
        console.log('Valid');
    }
    else{
        console.log('Invalid');
    }
}
validateEmail(['valid@email.bg']);