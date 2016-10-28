function ListProcessor(commands) {
    let process = (function () {
        let container = [];
        function add(item) {
            container.push(item);
        }
        function remove(item) {
            container = container.filter(i => i != item);
        }
        function toStr() {
            return container.join(', ');
        }
        function print() {
            console.log('' + container);
        }
        return {add, remove, print};
    })();
    for(let c of commands){
        let[command,args] = c.trim().split(/\s+/);
        process[command](args);
    }
}
ListProcessor(['sum hello', 'sum again', 'remove hello', 'sum again', 'print']);
