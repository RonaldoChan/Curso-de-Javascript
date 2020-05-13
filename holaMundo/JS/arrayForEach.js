'use strict'

var nombres = ["Ronaldo", "Pepe", "lucas", "Roman"];

var lenguajes = ["php", "html", "javascript"];

console.log(nombres[2]);


nombres.forEach((elemento, index) => {
    if (index === 2)
        console.log((index) + " = " + elemento);
});



document.write("<h1> lenguajes de programacion </h1>");
document.write("<ul/>");

lenguajes.forEach((elemento, indice, dato) => {
    document.write("<li>" + elemento + "</li> ");
});

document.write("</ul>");




