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
        success: function (response) {
            $("$resultado").html(response);
            console.log(response)
        }
    });
}

