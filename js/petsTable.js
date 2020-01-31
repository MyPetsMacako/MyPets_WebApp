$(document).ready(function(){
    url_base = 'http://localhost:8888/laravel-ivanodp/MyPets_API/public/index.php'
    //document.getElementById("table").onclick = send;
    //window.onload = send;
    var data = [];
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
                columna7.innerHTML = data[i]["colour"];
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

                var a1 = document.createElement("a");
                a1.setAttribute("class", "dropdown-item text-warning");
                a1.setAttribute("href", "#");

                switch (data[i]["isBanned"]) {
                    case 0:
                        a1.innerHTML = "Banear";
                    break;
                    case 1:
                        a1.innerHTML = "Desbanear";
                        break;
                
                    default:
                        a1.innerHTML = "error";
                        break;
                }
                //a1.setAttribute('onclick', 'ban('+userid+')');
                
                var a2 = document.createElement("a");
                a2.setAttribute("class", "dropdown-item text-danger");
                a2.setAttribute("href", "#");
                //a2.setAttribute('onclick', 'destroy('+userid+')');
                a2.innerHTML = "Eliminar";

                var a3 = document.createElement("a");
                a3.setAttribute("class", "dropdown-item text-success");
                a3.setAttribute("href", "#");

                switch (data[i]["role_id"]) {
                    case 1:
                        a3.innerHTML = "Degradar";
                    break;
                    case 2:
                        a3.innerHTML = "Ascender";
                        break;
                
                    default:
                        a3.innerHTML = "error";
                        break;
                }
                //a3.setAttribute('onclick', 'role('+userid+')');
                //a3.innerHTML = "Degradar";
                

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
                div.appendChild(a3);         
    }
}

/*function destroy(userid) {
    console.log(userid)

    $.ajax({
        type: "DELETE",
        url: "http://localhost:8888/laravel-ivanodp/MyPets_API/public/index.php/api/deleteUser/"+userid,
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", $token);
        },
        success:function(response){
            //alert("Usuario eliminado correctamente");
            if(alert("Usuario eliminado correctamente")){}
            else    window.location.reload(); 
        },
        error: function(result) {
            console.log("error")
        }

    });
}

 function ban(userid) {
    console.log(userid)

    $.ajax({
        type: "POST",
        url: "http://localhost:8888/laravel-ivanodp/MyPets_API/public/index.php/api/ban/"+userid,
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", $token);
        },
        success:function(response){
            //alert("Usuario eliminado correctamente");
            if(alert("Acción completada con éxito")){}
            else    window.location.reload(); 
        },
        error: function(result) {
            console.log("error")
        }

    });
}

function role(userid) {
    console.log(userid)

    $.ajax({
        type: "POST",
        url: "http://localhost:8888/laravel-ivanodp/MyPets_API/public/index.php/api/role/"+userid,
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", $token);
        },
        success:function(response){
            //alert("Usuario eliminado correctamente");
            if(alert("Acción completada con éxito")){}
            else    window.location.reload(); 
        },
        error: function(result) {
            console.log("error")
        }

    });
} */