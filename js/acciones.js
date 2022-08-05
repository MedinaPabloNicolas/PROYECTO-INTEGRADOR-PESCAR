const barra = document.getElementsByClassName("pegado");

window.addEventListener('scroll', function () {

    barra[0].classList.toggle("scroll-abajo", window.scrollY > 0);
});//cuando scrollea para abajo, se cambia hacia la clase abajo


const btnMenu = document.querySelector('#btnMenu');
const background = document.querySelector('#background');
const menu = document.querySelector('#menu');
btnMenu.addEventListener('click', function () {
    menu.classList.toggle('mostrar');
    background.classList.toggle('mostrar-background');
});


//-------------------------------------------------------------------//
/*------aparece y desaparece el rectangulo de texto en menu.css------*/
//-------------------------------------------------------------------//
const buscarTexto = document.getElementById('boton-buscar-texto1');//con la constante agarro el id del icono
buscarTexto.addEventListener('click', function () { //le digo que cuando le haga click al icono se ejecuta la funcion
    let mostrarTextoCanasta = document.getElementById('mostrar-texto-canasta');//tomo al id 

    let mostrarTextoLupa = document.getElementById('mostrar-texto-lupa');
    mostrarTextoLupa.classList.remove('buscar--texto--abierto');
    //cuando se activa mostrarTextoCanasta quiro buscar--texto--abierto a la lupa

    mostrarTextoCanasta.classList.toggle('buscar--texto--abierto');//hago toggle por esta clase
});
//idem anterior lupa
const buscarTexto2 = document.getElementById('boton-buscar-texto2');
buscarTexto2.addEventListener('click', function () {
    let mostrarTextoLupa = document.getElementById('mostrar-texto-lupa');

    let mostrarTextoCanasta = document.getElementById('mostrar-texto-canasta');
    mostrarTextoCanasta.classList.remove('buscar--texto--abierto');

    mostrarTextoLupa.classList.toggle('buscar--texto--abierto');
});
