function usernames(inp) {
    let res = [];
    for(let email of inp){
        let [alias,domain] = email.split('@');
        let username = alias + '.';
        let domainParts = domain.split('.');
        domainParts.forEach(p=>username+=p[0]);
        res.push(username);
    }
    console.log(res.join(', '));
}
usernames(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);
