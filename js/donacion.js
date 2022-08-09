document.getElementById("preguntas").style.display = "none"; //Main Oculto por defecto

function mostrar(){
    document.getElementById("preguntas").style.display = "block";
}
function ocultar(){
    document.getElementById("preguntas").style.display = "none";
}
function mostrar_Ocultar() {
        if (preguntas.style.display == "none") {
        mostrar()
    }
    else{
        ocultar()
    }
}