function template(inp) {
    let xmlFormat = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xmlFormat += '<quiz>\n';
    for (let a = 0; a < inp.length; a++) {
        let question = inp[a];
        let answer = inp[a+1];
        xmlFormat += '\t<question>\n';
        xmlFormat += '\t\t${question}\n';
        xmlFormat += '</question>\n';
        xmlFormat += '\t<answer>\n';
        xmlFormat += 't\t${answer}\n';
        xmlFormat += '\t</answer>\n';
    }
    xmlFormat += '</quiz>';
    return xmlFormat;
}
console.log(template(['Who was the forty-second president of the U.S.A?','William Jefferson Clinton']));

