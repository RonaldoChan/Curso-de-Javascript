'use strtict'

var peliculas = [];


do {
    var elemento = prompt("ingrese una pelicula: ");
    if (elemento === "ACABAR") {
        break;
    }
    else {
        peliculas.push(elemento);
    }
} while (elemento != "ACABAR");


console.log(peliculas);
document.write("<h1>Peliculas agregadas</h1>");
document.write("<ul>");

peliculas.forEach(elemento => {
    document.write(`<li>${elemento}</li>`);
});

document.write("</ul>");