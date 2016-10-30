function solve() {
   let obj = {};
    obj.extend = function (template) {
        for(let pr in template){
            if(typeof template[pr] == 'function'){
                Object.getPrototypeOf(obj)[pr] = template[pr];
            }else{
                obj[pr] = template[pr];
            }
        }
    };
    return obj;
}
