document.getElementById("formulario").addEventListener("submit", function(event){
    event.preventDefault();
    var nombre = document.getElementById("nombre").value;
    var edad = document.getElementById("edad").value;
    alert("Hola " + nombre + ", tienes " + edad + " años");
});
