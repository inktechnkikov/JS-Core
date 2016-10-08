function aggrTable(lines) {
    let town = [],sum =0;
    for(let l of lines){
        let townData = l.split('|');
        let townName = townData[1].trim();
        let income = Number(townData[2].trim());
        town.push(townName);
        sum += income;
    }
    console.log(town.join(', ') + '\n' + sum);
}
aggrTable(['| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275']
);