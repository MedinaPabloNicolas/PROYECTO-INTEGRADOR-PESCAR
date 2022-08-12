const boton = document.querySelector('#run');
console.log(boton);

function progesoBarra() {
    const barra = document.querySelector('#barra');
    let width = 0;
    let id = setInterval(carga, 10);

    function carga() {
        if (width === 100) {
            clearInterval(id);
        } else {
            width++;
            console.log(width);
            barra.style.width = width + "%";
        }
    }
}
boton.addEventListener('click', progesoBarra);