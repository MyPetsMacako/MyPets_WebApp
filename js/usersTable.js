$(document).ready(function(){
    url_base = 'http://localhost:8888/laravel-ivanodp/MyPets_API/public/index.php'
    //document.getElementById("table").onclick = send;
    //window.onload = send;
    var data = [];
})

send();

function send (){
    $token = window.localStorage.getItem("token");
    $.ajax({
        type: "GET",
        url: "http://localhost:8888/laravel-ivanodp/MyPets_API/public/index.php/api/showUsersData",
        /*beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", $token);
        },*/
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
                switch (data[i]["role_id"]) {
                    case 1:
                        columna2.innerHTML = "Admin";
                    break;
                    case 2:
                        columna2.innerHTML = "User";
                        break;
                
                    default:
                        columna2.innerHTML = "error";
                        break;
                }
                //columna2.innerHTML = data[i]["role_id"];
                var columna3 = document.createElement("th")
                switch (data[i]["isBanned"]) {
                    case 0:
                        columna3.innerHTML = "No";
                    break;
                    case 1:
                        columna3.innerHTML = "Si";
                        break;
                
                    default:
                        columna3.innerHTML = "error";
                        break;
                }
                //columna3.innerHTML = data[i]["isBanned"];
                var columna4 = document.createElement("th")
                columna4.innerHTML = data[i]["fullName"];
                var columna5 = document.createElement("th")
                columna5.innerHTML = data[i]["nickname"];
                var columna6 = document.createElement("th")
                columna6.innerHTML = data[i]["email"];
                var columna7 = document.createElement("button")
                columna7.innerHTML = "•••";
                columna7.setAttribute("class", "btn btn-info dropdown-toggle");
                columna7.setAttribute("type", "button");
                columna7.setAttribute("id", "dropdownMenuButton");
                columna7.setAttribute("data-toggle", "dropdown");
                columna7.setAttribute("aria-haspopup", "true");
                columna7.setAttribute("aria-expanded", "false");
                
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
                a1.innerHTML = "Banear";

                var a2 = document.createElement("a");
                a2.setAttribute("class", "dropdown-item text-danger");
                a2.setAttribute("href", "#");
                a2.innerHTML = "Eliminar";

                var a3 = document.createElement("a");
                a3.setAttribute("class", "dropdown-item text-warning");
                a3.setAttribute("href", "#");
                a3.innerHTML = "Degradar";
                

                lista.appendChild(tr);
                tr.appendChild(columna1);
                tr.appendChild(columna2);
                tr.appendChild(columna3);
                tr.appendChild(columna4);
                tr.appendChild(columna5);
                tr.appendChild(columna6);
                tr.appendChild(columna7);
                columna7.appendChild(div);
                div.appendChild(a);
                div.appendChild(a1);
                div.appendChild(a2);
                div.appendChild(a3);
    }
}
