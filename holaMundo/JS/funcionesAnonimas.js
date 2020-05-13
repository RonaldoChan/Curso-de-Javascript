'use strict'
//funciones anonimas: es una funcion que no tiene nombre 

var peliculas = function (nombre) {
    return "la pelicula es: " + nombre;
}

//callback: es una funcion dentro de otra 

function sumame(numero1, numero2) {
    var sumar = numero1 + numero2;

    return sumar;
}

console.log("la suma es" + sumame);

