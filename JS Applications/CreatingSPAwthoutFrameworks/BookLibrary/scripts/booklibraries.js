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

    $('#btnLoginUser').click(loginUser());
    $('#btnRegUser').click(registerUser);
    $('#btnCreateBook').click(createBook);
    $('#btnEditBook').click(editBook);

    $("#errorBox, #infoBox, #loadingBox").click(function () {
        $(this).fadeOut();
    });

    function showHideMenuLinks() {

    }
    function showView(viewName) {
        
    }
    function showHomeView() {
        showView('viewHome');
    }
    function loginUser() {
        
    }
    function showLoginView() {

    }
    function showRegistrationView() {
        
    }
    function listBooks() {
        
    }
    function showCreatedBooksView() {
        
    }
    function logoutUser() {
        
    }
    function registerUser() {

    }
    function createBook() {
        
    }
    function editBook() {

    }
}