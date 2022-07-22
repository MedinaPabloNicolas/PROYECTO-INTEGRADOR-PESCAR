const barra = document.querySelector(".pegado");

window.addEventListener('scroll', function () {

    barra.classList.toggle("abajo", window.scrollY > 0);
});//cuando scrollea para abajo, se cambia hacia la clase abajo
