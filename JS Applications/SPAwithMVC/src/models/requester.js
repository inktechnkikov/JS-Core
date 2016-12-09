const kinveyBaseUrl = "https://baas.kinvey.com/";
const kinveyAppId = "kid_HkcMkNOQl";
const kinveyAppSecret = "17329266509e46aea6bb7ad5f93e6c97";

function get(module, url, auth) {
    let hostUrl = kinveyBaseUrl + module + "/" + kinveyAppId + "/" + url;
    let header = {
        "Athotization": ""
    };
    switch (auth){
        case "basic":
            header["Athotization"] = "Basic " + btoa(kinveyAppId + ":" + kinveyAppSecret);
            break;
        case "kinvey":
            header["Athotization"] = "Kinvey " + sessionStorage.getItem("authToken");
            break;
    }
    return $.ajax({
        method: "GET",
        url:hostUrl,
        headers:header,
    });
}
