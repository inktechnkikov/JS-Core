import $ from 'jquery';

let KinveyRequster = (function () {
    const appId = "kid_HyRF817fx";
    const appSecret = "54e39de87d5e43fd881348d1b75b9f11";
        const baseUrl = "https://baas.kinvey.com/";
        const appAuthHeaders = {
            "Authorization":"Basic " + btoa(appId + ":" + appSecret)
        };

    function loginUser(username,password) {
        return $.ajax({
            method: "POST",
            url:baseUrl + "user/" + appId + "/login",
            data:{username,password},
            headers:appAuthHeaders
        });
    }
    function registerUser() {
        
    }
    return {
        loginUser,
        registerUser
    }
})();