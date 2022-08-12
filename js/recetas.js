

const recetas = [['tostado coreano', 30, 'pan, queso, huevo, jamon,', '0002.jpg', 'https://youtu.be/_XSjpOQad9w', 'Rapida', 'Paso 1: Colocamos un poco de manteca en la sartén y el pan para que se tueste por ambos lados.Sacamos y reservamos.Paso 2:En la misma sartén con un poco de aceite hacemos una tortilla con la cebolla, la lechuga y la zanahoria bien picada junto con el huevo y salpimentado.Hacemos la tortilla de manera cuadrada para que quede bien en el sándwich.Sacamos y reservamos.Paso 3: Pasamos el jamón o la panceta por la sartén y sacamos.Ahora llega el momento de meterlo en nuestro sándwich, en una de nuestras tostadas untamos el kétchup luego ponemos la tortilla, el jamón y el queso rallado que se derretirá un poco con el calor y ya está listo para comer.'],
['berenjena rellena de atun', 80, 'berenjena, atun, queso, cebolla,', '0001.jpg', 'https://youtu.be/vaN-BjA4YTo', 'Salud', 'Paso 1:Cortamos 2 berenjenas por la mitad y les hacemos cortes en forma de rejilla.Las regamos con un poco de aceite de oliva  y las horneamos 45 minutos a 200º.A continuación, las vaciamos con ayuda de una cuchara y reservamos la carne.Paso 2: En una sartén con aceite de oliva, pochamos 10 minutos 1 cebolla picada con sal.Añadimos la carne de las berenjenas, 2 latas de atún escurridas, 1 cdta.de comino, 1 cdta.de pimentón dulce, sal y pimienta.Mezclamos bien y añadimos 50 ml.de tomate frito.Removemos de nuevo y cocinamos 5 minutos.Paso 3: Rellenamos las berenjenas con la mezcla queso especial para gratinar(Mozzarella) Gratinamos 5 minutos a 200º.']

];
function busqueda() {

    let letra = document.getElementById("mostrar-texto-lupa");
    console.log(letra.value);
    tiempoElegido(9999, "todo", letra.value);
}

function ingredientes() {

    let letra = document.getElementById("mostrar-texto-canasta");
    console.log(letra.value);
    tiempoElegido(9999, letra.value, "todo");
}

function tiempoElegido(t, i, n) {
    //tiempo, ingredientes y nombre


    const main = document.querySelector("main");
    main.innerHTML = " ";

    recetas.forEach(function (receta) {

        if (receta[1] <= t) {
            if (receta[0].includes(n) || n === "todo") {
                if (receta[2].includes(i) || i === "todo") {



                    var article = document.createElement("article");
                    article.classList.add("entrada");

                    var div = document.createElement("div");
                    div.classList.add("entrada__imagen");

                    var picture = document.createElement("picture");

                    var divCapa = document.createElement("div");
                    divCapa.classList.add("capa");

                    var divContenido = document.createElement("div");
                    divContenido.classList.add("entrada__contenido");

                    var img = document.createElement("img");

                    var h4 = document.createElement("h4");

                    h4.classList.add("no-margin");

                    //funciona alert(receta[1]);

                    img.src = "img/" + receta[3];
                    h4.style.textTransform = "capitalize";
                    h4.textContent = receta[0];

                    var a = document.createElement("h4");
                    a.classList.add("boton");
                    a.classList.add("boton--primario");
                    a.textContent = "Ver Mas";
                    a.addEventListener('click', function () { cookie(receta); }); //llamo a 2 funciones para que no se ejecute al arrancar

                    divContenido.appendChild(h4);
                    divContenido.appendChild(a);
                    picture.appendChild(img);
                    picture.appendChild(divCapa);
                    div.appendChild(picture);
                    article.appendChild(div);
                    article.appendChild(divContenido);
                    main.appendChild(article);

                    document.documentElement.scrollTop = 600;//al seleccionar el tiempo, te transporta 600px para abajo

                    console.log(document.documentElement.scrollTop);
                }
            }
        }
    });
    console.log(n);
}
function cookie(receta) {//almacenamiento interno del navegador
    // alert(receta);
    localStorage.setItem('nombre', receta[0]);
}


