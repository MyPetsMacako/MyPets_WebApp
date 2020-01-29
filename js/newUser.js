$(document).ready(function(){
    url_base = 'http://localhost:8888/laravel-ivanodp/MyPets_API/public/index.php'
    document.getElementById("button").onclick = send;
    var passMatch = false;
})

function get_vars(){
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var email = document.getElementById("email").value;
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;

    var data = {
        "name" : name,
        "surname" : surname,
        "email" : email,
        "password1" : password1,
        "password2" : password2
    }
    return data;
}

function verifyPasswords(){
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;

    console.log(password1);
    console.log(password2);

    if(password1==password2){
        passMatch = true;
        return passMatch;
    } else {
        passMatch = false;
        document.getElementById('warning').style.display = 'block';
        document.getElementById("warning").className = "text-danger";
        document.getElementById('warning').innerHTML = "Las contraseñas no coinciden";
        return passMatch;
    }
}


function send (){
    var data = get_vars();
    $token = window.localStorage.getItem("token");
    var passMatch = verifyPasswords();

    if (passMatch == true){
        $.ajax({
            type: "POST",
            url: "http://localhost:8888/laravel-ivanodp/MyPets_API/public/index.php/api/register",
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", $token);
            },
            data: data,
            success:function(response){
                document.getElementById('warning').style.display = 'block';
                document.getElementById("warning").className = "text-success";
                document.getElementById('warning').innerHTML = "Usuario registrado correctamente";
            },
            error: function(result) {
                document.getElementById('warning').style.display = 'block';
                document.getElementById("warning").className = "text-danger";
                document.getElementById('warning').innerHTML = result.responseJSON.message;
            }
    
        });
    }else{
        document.getElementById('warning').style.display = 'block';
        document.getElementById("warning").className = "text-danger";
        document.getElementById('warning').innerHTML = result.responseJSON.message;
    }
    
}