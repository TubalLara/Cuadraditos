var url = "https://alumnos-mcsd2014.azure-mobile.net/Tables/mapas"

function drag(evt) {
    evt.dataTransfer.setData("text/html", evt.target.id);
}

function dropable(evt) {
    evt.preventDefault();//significa que le indicamos que no actúes como predefinido
}

function drop(evt) {
    evt.preventDefault();
    var datos = evt.dataTransfer.getData("text/html");
    evt.target.appendChild(document.getElementById(datos));//con esto hacemos que se pueda meter dentro
}
function leerInfo() {
    if (localStorage && localStorage["nombre"]) {
        nombre = eval(localStorage["nombre"]);
        alert(nombre);
    } else {
        alert("Introduce Nombre")
    }
};


function escribir() {
       var nombre = document.querySelector("#txtNombre").value;

       localStorage.setItem("nombre", JSON.stringify(nombre) );
   


};
function borrar() {
   
    localStorage.removeItem("nombre");


};
function sorpresa() {
    if (localStorage && localStorage["nombre"]) {
        nombre = eval(localStorage["nombre"]);
        document.getElementById(capa1).style.display = "block";
        document.getElementById(capa2).style.display = "block";
        
    } else {
        document.getElementById(capa1).style.display = "none";
        document.getElementById(capa2).style.display = "none";
    }
}

(function () {
  
    document.querySelector("#btnGuardar").addEventListener("click", escribir, sorpresa);
    document.querySelector("#btnBorrar").addEventListener("click", borrar);

    leerInfo();
    sorpresa();
   
   

})();