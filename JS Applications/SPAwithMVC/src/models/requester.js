import $ from 'jquery';
const kinveyBaseUrl = "https://baas.kinvey.com/";
const kinveyAppId = "kid_HkcMkNOQl";
const kinveyAppSecret = "17329266509e46aea6bb7ad5f93e6c97";

function makeHeader(auth) {
    let header = {
        "Authorization": ""
    };
    switch (auth){
        case "basic":
            header["Authorization"] = "Basic " + btoa(kinveyAppId + ":" + kinveyAppSecret);
            break;
        case "kinvey":
            header["Authorization"] = "Kinvey " + sessionStorage.getItem("authToken");
            break;
    }
    return header;
}

function get(module, url, auth) {
    let hostUrl = kinveyBaseUrl + module + "/" + kinveyAppId + "/" + url;
    let header = makeHeader(auth);
    switch (auth){
        case "basic":
            header["Authorization"] = "Basic " + btoa(kinveyAppId + ":" + kinveyAppSecret);
            break;
        case "kinvey":
            header["Authorization"] = "Kinvey " + sessionStorage.getItem("authToken");
            break;
    }
    return $.ajax({
        method: "GET",
        url:hostUrl,
        headers:header
    });
}
function post(module,url,auth,data) {
    let hostUrl = kinveyBaseUrl + module + "/" + kinveyAppId + "/" + url;
    let header = makeHeader(auth);

    return $.ajax({
        method: "POST",
        url: hostUrl,
        headers: header,
        data:data
    });
}
export {get,post};