var url = "https://alumnos-mcsd2014.azure-mobile.net/Tables/mapas"



function drag(evt) {
    evt.dataTransfer.setData("text/html", evt.target.id);
}

function dropable(evt) {
    evt.preventDefault();//significa que le indicamos que no actúes como predefinido
}

function drop(evt) {
    evt.preventDefault();
    var data = evt.dataTransfer.getData("text/html");
    evt.target.appendChild(document.getElementById(data));//con esto hacemos que se pueda meter dentro
}

function dibujarCuadradito() {
    var micanvas = document.querySelector("#micanvas");
    var c = micanvas.getContext("2d");

    c.fillStyle = "#05ac33";//fillStyle es una propiedad
    c.fillRect(datos.x, datos.y, datos.h, datos.w);//dibuja un rectángulo

}

function leerInfoNombre() {
    if (localStorage && localStorage["datonombre"]) {
        datonombre = eval(localStorage["datonombre"]);
        alert(datonombre);
    } else {
        alert("Introduce Nombre")
    }
};

var leerDatos = function () {
    
    var urlFinal = url + "?$filter=" + datonombre; //REVISAR LA URL QUE TENGO MAL APUNTADO HACER EL FILTRO
    var ajax = new XMLHttpRequest();
    ajax.open("GET", urlFinal);
    ajax.onreadystatechange = function () {

        if (ajax.readyState != 4)
            return;

        if (ajax.status >= 200 && ajax.status < 300) {
            
            var datos = eval(ajax.responseText);
            dibujarCuadradito(datos);

        } else {
            alert("Error recuperando informacion");
        }

    };
    ajax.send(null);

};

var escribirDatos = function () {
    
    var ajax = new XMLHttpRequest();
    
    var json = {
        nombre: document.getElementById("datonombre").value,
        x: document.getElementById("ncoorX").value,
        y: document.getElementById("ncoorY").value,
        h: document.getElementById("naltura").value,
        w: document.getElementById("nancho").value
    };
    
    ajax.open("GET", url);
    
    ajax.setRequestHeader("Content-type", "application/json");
    ajax.onreadystatechange = function () {

        if (ajax.readyState != 4)
            return;

        if (ajax.status >= 200 && ajax.status < 300) {
            leerDatos();

        } else {

            alert("Error escribiendo datos");
        }

    };


    var jsonText = JSON.stringify(json);
    ajax.send(jsonText);

};

function escribirNombre() {
       var datonombre = document.querySelector("#txtNombre").value;

       localStorage.setItem("datonombre", JSON.stringify(datonombre) );
   


};
function borrarNombre() {
   
    localStorage.removeItem("datonombre");


};
function sorpresa() {
    if (localStorage && localStorage["datonombre"]) {
        nombre = eval(localStorage["datonombre"]);
        document.getElementById(capa1).style.display = "block";
        document.getElementById(capa2).style.display = "block";
        
    } else {
        document.getElementById(capa1).style.display = "none";
        document.getElementById(capa2).style.display = "none";
    }
}

(function () {
  
    document.querySelector("#btnGuardar").addEventListener("click", escribirNombre, sorpresa);
    document.querySelector("#btnBorrar").addEventListener("click", borrarNombre);
    document.querySelector("#btnCrear").addEventListener("click", escribirDatos);

    leerInfoNombre();
    sorpresa();
   
   

})();