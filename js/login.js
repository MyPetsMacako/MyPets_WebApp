$(document).ready(function(){
    url_base = 'http://localhost:8888/laravel-ivanodp/MyPets_API/public/index.php'
    document.getElementById("button").onclick = required;
    
    $token = window.localStorage.getItem("token");
    console.log("token: "+$token);
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
        success:function(response){
            window.localStorage.setItem('token', response["token"]);
            location.href ="mainPanel%20-%20home.html";
        },
        error: function(result) {
            document.getElementById('warning').style.display = 'block';
            document.getElementById('warning').innerHTML = result.responseJSON.message;
        }

    });
}

function required(){
    var data = get_vars();
    if (data["email"] == "" || data["password"] == ""){
        alert("Completa todos los campos");
        return;
    } else {
        send ()
    }
}

