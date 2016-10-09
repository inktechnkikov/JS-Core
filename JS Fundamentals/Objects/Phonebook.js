let phonebook = {};
phonebook['John Smith'] = "+56 3433656";
phonebook['Tomas Hans'] = "+123 45546567";
for(let info of Object.keys(phonebook)){
    console.log(info + '->' + phonebook[info]);
}
