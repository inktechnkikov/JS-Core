import * as requester from './requester';

function saveSession(userInfo) {
    let userAuth = userInfo._kmd.authtoken;
    sessionStorage.setItem('authToken', userAuth);
    let userId = userInfo._id;
    sessionStorage.setItem('userId',userId);
    let username = userInfo.username;
    sessionStorage.setItem('username',username);
}
//user/login
function login(username,password, callback) {
    let userData = {
        username:username,
        password:password
    };
    requester.post('user', 'login', 'basic', userData)
        .then((response) =>{
            saveSession(response);
            callback(true);
        });
}
//user/register
function register(username,password, callback) {
    let userData = {
        username:username,
        password:password
    };
    requester.post('user', '', 'basic', userData)
        .then((response) =>{
        saveSession(response);
        callback(true);
        });
}
//user/logout
function logout() {
    sessionStorage.clear();
}
export {login,register,logout};