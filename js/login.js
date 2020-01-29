$(document).ready(function(){
    url_base = 'http://localhost:8888/laravel-ivanodp/MyPets_API/public/index.php'
    document.getElementById("button").onclick = send;
})

function get_vars(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var data = {
        "email" : email,
        "password" : password
    }
    return data;
}




function send (){
    var data = get_vars();
    $.ajax({
        type: "POST",
        url: "http://localhost:8888/laravel-ivanodp/MyPets_API/public/index.php/api/adminLogin",
        data: data,
<<<<<<< HEAD:js/login.js
        success:function(response){
            //console.log(response["token"]);
            window.localStorage.setItem('token', response["token"]);
            location.href ="mainPanel%20-%20home.html";
        },
        error: function(result) {
            document.getElementById('warning').style.display = 'block';
            document.getElementById('warning').innerHTML = result.responseJSON.message;
=======
        success: function(result)
        {
            if(result && result.auth_token.length>1) // you should do your checking here
            {
                window.location = 'http://www.google.com/'; //just to show that it went through
            }
            else
            {
                $('#result').empty().addClass('error')
                    .append('Something is wrong.');
            }
>>>>>>> e86478e9dee9e631f4378c7789744e28e606fd4c:app.js
        }

    });
}

