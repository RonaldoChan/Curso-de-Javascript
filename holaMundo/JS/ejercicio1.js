'use strict'

//ejercicio 1:programa que pida 2 numeros y que nos diga cual es el mayor, el menor y si son iguales

var numero1 = parseInt(prompt("ingrese el primer numero", 0));
console.log("numero 1: " + numero1);

var numero2 = parseInt(prompt("ingrese el segundo numero", 0));
console.log("numero 2: " + numero2);

var nMayor = 0;
var nMenor;

if (numero1 > numero2) {
    nMayor = numero1;
}
else {
    nMayor = numero2;
}


if (numero1 < numero2) {
    nMenor = numero1;
}
else {
    nMenor = numero2;
}
if (numero1 == numero2) {
    var estado = true;
    console.log("son iguales: " + estado);
    alert("los numeros son iguales");
}
else {
    estado=false;
    console.log("son iguales: " + estado)
}

console.log("El numero menor es: " + nMenor);
console.log("El numero mayor es: " + nMayor);

alert("El numero menor es: " + nMenor);
alert("El numero mayor es: " + nMayor);



