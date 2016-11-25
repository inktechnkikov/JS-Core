const kinveyBaseUrl = "https://baas.kinvey.com/";
const kinveyAppID = "kid_HyRF817fx";
const kinveyAppSecret = "54e39de87d5e43fd881348d1b75b9f11";
const kinveyAuthHeaders = {
    "Authorization":"Basic " + btoa(kinveyAppID + ":" + kinveyAppSecret),
};
function startApplication() {

    sessionStorage.clear();
    showHideMenuLinks();

    showView('viewHome');

    $('#linkHome').click(showHomeView);
    $('#linkLogin').click(showLoginView);
    $('#linkReg').click(showRegistrationView);
    $('#linkListBook').click(listBooks);
    $('#linkCreateBooks').click(showCreatedBooksView);
    $('#linkLogout').click(logoutUser);

    $('#btnLoginUser').click(loginUser);
    $('#btnRegUser').click(checkFieildForReg);
    $('#btnCreateBook').click(createBook);
    $('#btnEditBook').click(editBook);

    $("#errorBox, #infoBox, #loadingBox").hide();
    //Attach ajax loading events
    $(document).on({
        ajaxStart: function () {
            $('#loadingBox').show()
        },
        ajaxStop: function () {
            $("#loadingBox").hide()
        }
    });

    function showHideMenuLinks() {
        $('#menu a').hide();
        if (sessionStorage.getItem("authToken")) {
            //if user is logged in
            $('#linkHome').show();
            $('#linkListBook').show();
            $('#linkCreateBooks').show();
            $('#linkLogout').show();
        }
        else {
            $('#linkReg').show();
            $('#linkHome').show();
            $('#linkLogin').show();
        }
    }

    function showView(viewName) {
        $('main > section').hide();
        $('#' + viewName).show();
    }

    function showHomeView() {
        showView('viewHome');
    }

    function loginUser() {
        let userLoginData = {
          username: $('#formLogin input[name=username]').val(),
            password: $('#formLogin input[name=passwd]').val()
        };
        $.ajax({
            method:"POST",
            url:kinveyBaseUrl + "user/" + kinveyAppID + '/login',
            data: JSON.stringify(userLoginData),
            contentType: "application/json",
            headers:kinveyAuthHeaders,
            success:loginUserSuccess,
            error:showAjaxError
        });
        function loginUserSuccess(userinfo) {
            saveAuthInSession(userinfo);
            showHideMenuLinks();
            listBooks();
            showInfo("Login successful");
        }

    }

    function showLoginView() {
        showView('viewLogin');
        $('#formLogin').trigger('reset');
    }

    function showRegistrationView() {
        showView('viewRegister');
        $('#formRegister').trigger('reset');
    }

    function listBooks() {

    }

    function showCreatedBooksView() {
        showView('viewCreateBook');
        $('#formCreateBook').trigger('reset');
    }

    function logoutUser() {
        sessionStorage.clear();
        $('#logedInUser').text("");
        showView("viewHome");
        showInfo("You`re logout successful");
        showHideMenuLinks();
    }

    function checkFieildForReg() {
        let userField = $('#formRegister input[name=username]').val();
        let passField = $('#formRegister input[name=passwd]').val();
        if(userField === ""){
            showError("Username is empty");
        }
        else if(passField === ""){
            showError("Password is empty");
        }
        else {
            registerUser();
        }

        function registerUser() {

            let userData = {
                username: $('#formRegister input[name=username]').val(),
                password: $('#formRegister input[name=passwd]').val()
            };
            $.ajax({
                method: "POST",
                url: kinveyBaseUrl + "user/" + kinveyAppID,
                data: JSON.stringify(userData),
                contentType: "application/json",
                headers: kinveyAuthHeaders,
                success: registerUserSuccess,
                error: showAjaxError
            });
            function registerUserSuccess(userinfo) {
                saveAuthInSession(userinfo);
                showHideMenuLinks();
                listBooks();
                showInfo("User has been registered");
            }

        }

    }
    function saveAuthInSession(userinfo) {
        sessionStorage.setItem("username", userinfo.username);
        sessionStorage.setItem("authToken", userinfo._kmd.authtoken);
        $('#logedInUser').text("Welcome " + userinfo.username);
    }
    function showInfo(message) {
        $('#infoBox').text(message);
        $('#infoBox').show();
        setTimeout(function () {
            $('#infoBox').fadeOut();
        }, 3000);
    }
    function showAjaxError(response) {
        let errorMessage = JSON.stringify(response);
        if (response.readyState === 0) {
            errorMessage = " Cannot connect due to network";
        }
        if (response.responseJSON && response.responseJSON.description) {
            errorMessage = response.responseJSON.description;
            showError(errorMessage);
        }
    }
    function showError(msgText) {
        $('#errorBox').text(msgText);
        $('#errorBox').show();
        setTimeout(function () {
            $('#errorBox').fadeOut()
        },3000);
    }
    function createBook() {

    }
    function editBook() {

    }
}