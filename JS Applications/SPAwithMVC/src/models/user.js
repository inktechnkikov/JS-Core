import requester from './requester';

function saveSession(userInfo) {
    let userAuth = userInfo._kmd.authtoken;
    sessionStorage.setItem('authToken', userAuth);
    let userId = userInfo._id;
    sessionStorage.setItem('userId',userId);
    let username = userInfo.username;
    sessionStorage.setItem('username',username);
}

function login(username,password, callback) {
    let userData = {
        username:username,
        password:password
    };
    requester.post('user', 'login', 'basic', userData)
        .then()
}
