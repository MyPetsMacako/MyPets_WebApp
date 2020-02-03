$(document).ready(function(){
    url_base = 'http://localhost:8888/laravel-ivanodp/MyPets_API/public/index.php'
    document.getElementById("button").onclick = required;
})

function get_vars(){
    var dateTime = document.getElementById("dateTime").value;
    var description = document.getElementById("description").value;

    var data = {
        "pet_id" : "1",
        "dateTime" : dateTime,
        "description" : description
    }
    return data;
}


function send (){
    var data = get_vars();
    $token = window.localStorage.getItem("token");
    $.ajax({
        type: "POST",
        url: "http://localhost:8888/laravel-ivanodp/MyPets_API/public/index.php/api/appointmentRegister",
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", $token);
        },
        data: data,
        success:function(response){
            document.getElementById('warning').style.display = 'block';
            document.getElementById("warning").className = "text-success";
            document.getElementById('warning').innerHTML = "Usuario registrado correctamente";
            setTimeout(function () {
                window.location.href="mainPanel%20-%20apointments.html";
                }, 3000);
        },
        error: function(result) {
            document.getElementById('warning').style.display = 'block';
            document.getElementById("warning").className = "text-danger";
            document.getElementById('warning').innerHTML = result.responseJSON.message;
        }

    });
    
    
}


function required(){
    var data = get_vars();
    if (data["description"] == ""){
        alert("Completa todos los campos");
        return;
    } else {
        send ()
    }
}