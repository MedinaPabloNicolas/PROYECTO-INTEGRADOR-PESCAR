const barra = document.getElementsByClassName("pegado");

window.addEventListener('scroll', function () {

    barra[0].classList.toggle("scroll-abajo", window.scrollY > 0);
});//cuando scrollea para abajo, se cambia hacia la clase abajo


const btnMenu = document.querySelector('#btnMenu');
const background = document.querySelector('#background');
const menu = document.querySelector('#menu');
btnMenu.addEventListener('click', function(){
    menu.classList.toggle('mostrar');
    background.classList.toggle('mostrar-background')
})

