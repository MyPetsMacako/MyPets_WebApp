$(document).ready(function(){
    url_base = 'http://localhost:8888/laravel-ivanodp/MyPets_API/public/index.php'
    document.getElementById("button").onclick = required;
    var passMatch = false;
})

function get_vars(){
    var user_id = document.getElementById("user_id").value;
    var name = document.getElementById("name").value;
    var selectedOption = document.getElementById("selectedOption");
    var strSelectedOption = selectedOption.options[selectedOption.selectedIndex].value;
    var breed = document.getElementById("breed").value;
    var colour = document.getElementById("colour").value;
    var weight = document.getElementById("weight").value;
    var birth = document.getElementById("birth").value;

    var data = {
        "user_id" : user_id,
        "name" : name,
        "species" : strSelectedOption,
        "breed" : breed,
        "colour" : colour,
        "weight" : weight,
        "birth_date" : birth
    }
    return data;
}


function send (){
    var data = get_vars();
    $token = window.localStorage.getItem("token");
    $.ajax({
        type: "POST",
        url: "http://localhost:8888/laravel-ivanodp/MyPets_API/public/index.php/api/adminPetsRegister",
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", $token);
        },
        data: data,
        success:function(response){
            document.getElementById('warning').style.display = 'block';
            document.getElementById("warning").className = "text-success";
            document.getElementById('warning').innerHTML = "Mascota registrada correctamente";
            setTimeout(function () {
                window.location.href="mainPanel%20-%20pets.html";
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
    if (data["name"] == "" || data["species"] == "" || data["breed"] == "" || data["colour"] == "" || data["weight"] == ""){
        alert("Completa todos los campos");
        return;
    } else {
        send ()
    }
}