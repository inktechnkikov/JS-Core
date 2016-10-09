function htmlEscape(input) {
    let raw = '';
        for(let ch of input){
            if(ch == '<'){
                raw+= '&lt;';
            }
            else if(ch == '>'){
                raw+= '&gt;';
            }
            else if(ch == '&'){
                raw += '&amp;';
            }
            else if(ch == ''){
                raw+= '&quot;';
            }
            else {
                raw+=ch;
            }
        }

}
console.log(htmlEscape(['<script>']));