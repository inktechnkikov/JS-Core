class httpRequest {
    constructor(method,uri,version,message,response,fulfilled){
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = undefined;
        this.fulfilled = false;
    }
}
let data = new httpRequest("GET","http://google.com","HTTP/1.1","");
console.log(data);