const barra = document.getElementsByClassName("pegado");

window.addEventListener('scroll', function () {

    barra[0].classList.toggle("scroll-abajo", window.scrollY > 0);
});//cuando scrollea para abajo, se cambia hacia la clase abajo
