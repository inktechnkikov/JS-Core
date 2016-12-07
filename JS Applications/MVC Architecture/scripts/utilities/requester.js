function _makeRequst(method,url,headers,data) {
   return $.ajax({
        method:method,
        url:url,
        headers:headers,
        data:JSON.stringify(data)
    });
}

class Requester {
    constructor(){

    }
    get(url,headers){
       return _makeRequst('GET',url,headers, {});
    }
    post(url,headers,data){
       return _makeRequst('POST',url,headers,data);
    }
    delete(){
        //TODO...
    }
}
