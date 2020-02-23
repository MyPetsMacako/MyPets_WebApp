$(document).ready(function(){
    url_base = 'http://localhost:8888/laravel-ivanodp/MyPets_API/public/index.php'
    //document.getElementById("table").onclick = send;
    //window.onload = send;
    var data = [];
    localStorage.setItem('RequestedView', 'create');
})

getData();

function getData (){
    $token = window.localStorage.getItem("token");
    $.ajax({
        type: "GET",
        url: "http://localhost:8888/laravel-ivanodp/MyPets_API/public/index.php/api/showPetsData",
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", $token);
        },
        success:function(data){
            console.log("success");
            createTable(data)
        },
        error: function(result) {
            console.log("error");
        }

    });
}

function createTable (data){
    console.log("creando tabla...");
    for(var i=0; i<data.length; i++){
        lista = document.getElementById("tableData");
                var tr = document.createElement("tr");
                var columna1 = document.createElement("th")
                var petid = data[i]["id"];
                columna1.innerHTML = data[i]["id"];
                var columna2 = document.createElement("th")
                columna2.innerHTML = data[i]["user_id"];
                var columna3 = document.createElement("th")
                columna3.innerHTML = data[i]["name"];
                var columna4 = document.createElement("th")
                columna4.innerHTML = data[i]["species"];
                var columna5 = document.createElement("th")
                columna5.innerHTML = data[i]["breed"];
                var columna6 = document.createElement("th")
                columna6.innerHTML = data[i]["weight"];
                var columna7 = document.createElement("th")
                columna7.innerHTML = data[i]["color"];
                var columna8 = document.createElement("th")
                columna8.innerHTML = data[i]["birth_date"];
                var columna9 = document.createElement("th")
                columna9.innerHTML = data[i]["photo"];
                var columna10 = document.createElement("th")
                columna10.innerHTML = data[i]["documents"];
                var columna11 = document.createElement("button")
                columna11.innerHTML = "•••";
                columna11.setAttribute("class", "btn btn-info dropdown-toggle");
                columna11.setAttribute("type", "button");
                columna11.setAttribute("id", "dropdownMenuButton");
                columna11.setAttribute("data-toggle", "dropdown");
                columna11.setAttribute("aria-haspopup", "true");
                columna11.setAttribute("aria-expanded", "false");

                var div = document.createElement("div");
                div.setAttribute("class", "dropdown-menu");
                div.setAttribute("aria-labelledby", "dropdownMenuButton");
                var a = document.createElement("a");
                a.setAttribute("class", "dropdown-item text-primary");
                a.setAttribute("href", "#");
                a.innerHTML = "Editar";
                a.setAttribute('onclick', 'editPet('+petid+')');

                var a1 = document.createElement("a");
                a1.setAttribute("class", "dropdown-item text-danger");
                a1.setAttribute('onclick', 'destroy('+petid+')');
                a1.innerHTML = "Eliminar";
                
                var a2 = document.createElement("a");
                a2.setAttribute("class", "dropdown-item text-success");
                //a2.setAttribute("onclick", "window.location.href = 'mainPanel - new-apointment.html'");
                a2.setAttribute('onclick', 'newAppointment('+petid+')');
                a2.innerHTML = "Añadir cita";

                lista.appendChild(tr);
                tr.appendChild(columna1);
                tr.appendChild(columna2);
                tr.appendChild(columna3);
                tr.appendChild(columna4);
                tr.appendChild(columna5);
                tr.appendChild(columna6);
                tr.appendChild(columna7);
                tr.appendChild(columna8);
                tr.appendChild(columna9);
                tr.appendChild(columna10);
                tr.appendChild(columna11);
                columna11.appendChild(div);
                div.appendChild(a);
                div.appendChild(a1);  
                div.appendChild(a2); 
    }
}

function destroy(petid) {
    console.log(petid)

    $.ajax({
        type: "DELETE",
        url: "http://localhost:8888/laravel-ivanodp/MyPets_API/public/index.php/api/deletePet/"+petid,
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", $token);
        },
        success:function(response){
            //alert("Usuario eliminado correctamente");
            if(alert("Mascota eliminada correctamente")){}
            else    window.location.reload(); 
        },
        error: function(result) {
            console.log("error")
        }

    });
}

function newAppointment(petid) {
    console.log(petid)

    window.localStorage.setItem('RequestedPetId', petid);

    window.location.href = 'mainPanel - new-apointment.html'
}

function editPet(petid) {
    window.localStorage.setItem('RequestedPetId', petid);
    window.localStorage.setItem('RequestedView', "edit");

    window.location.href = 'mainPanel - new-pet.html'
}
