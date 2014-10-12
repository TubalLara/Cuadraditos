
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

(function () {
  
    document.querySelector("#btnGuardar").addEventListener("click", escribir);
    document.querySelector("#btnBorrar").addEventListener("click", borrar);

    leerInfo();
   

})();