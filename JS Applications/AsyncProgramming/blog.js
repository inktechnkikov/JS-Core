$(document).ready(function () {
const kinveyAppId = "kid_S12gDKlzg";
const serviceUrl = "https://baas.kinvey.com/appdata/" + kinveyAppId;
const kinveyUsername = "peter";
const kinveyPass = "p";
const base64auth = btoa(kinveyUsername + ":" + kinveyPass);
const authHeader = {"Authorization": "Basic " + base64auth};
   $('#btnLoadPosts').click(loadPostsClicked);
    function loadPostsClicked() {
        let getPostReq = {
            method: "GET",
            url:serviceUrl + "/posts",
            headers:authHeader
        };
        $.ajax(getPostReq)
            .then(displayPostInDropDown)
            .catch(displayError)
    }
    function displayPostInDropDown(posts) {
       for(let post of posts){
           let option = $('<option>');
           option.text(post.title);
           option.val(post._id);
           $('#posts').append(option);
       }
    }
    function displayError(error) {
        let errorDiv = $('<div>').text(error);
        $(document.body).prepend(errorDiv);
        setTimeout(function () {
            errorDiv.hide();
        },2000)
    }
    $('#btnViewPosts').click(viewPostClicked);
        function viewPostClicked() {
            let selectedPost = $('#posts').val();
            let getViewPostReq = {
                method: "GET",
                url:serviceUrl + `/comments/?query={"post_id":"${selectedPost}"}`,
                headers:authHeader
            };
            $.ajax(getViewPostReq).then(displayPostContent)
        }
        function displayPostContent(postContent) {
            $('#postComments').empty();
            for(let comment of postContent){
                $('<li>').text(comment.text).appendTo($('#postComments'));
            }
        }
});