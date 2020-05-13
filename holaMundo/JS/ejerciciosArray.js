'use strict'

//1- pida 6 numeros por pantalla y los meta en un array
//2- mostrar los elementos del array en el cuerpo de la pagina y en la consola 
//3- sacar el array ordenado
//4- invertir el orden y mostrarlo
//5- mostrar cuantos elementos tiene el array 
//6- busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice
// se valorará el uso de funciones 

function viewDisplay(elementos, texto = "") {
	document.write(`<h1>Elementos ${texto}</h1>`);
	document.write("<ul>");
	arreglo.forEach(elementos => {
		document.write(`<li> ${elementos} </li>`);
	});
	document.write("</ul>");
}

function viewConsole(elemento) {
	arreglo.forEach((elemento, index) => {
		console.log(`elemento ${index} = ${elemento}`)
	});
}


var arreglo = new Array(6);
//pedir 6 numeros 
for (var i = 0; i < 6; i++) {
	arreglo[i] = parseInt(prompt("ingrese un elemento: "));
}

//mostrar elementos en consola
viewConsole(arreglo)

//mostrar elementos en la pagina 
viewDisplay(arreglo, "ORDENADOS")

//invertir el arreglo y mostrarlo
var arregloI = arreglo.reverse();
viewDisplay(arregloI, "INVERTIDOS")

//mostrar cuantos elementos tiene el arreglo

console.log(`el tamaño del arreglo es: ${arreglo.length}`);
document.write(`<p><strong> tamaño del arreglo:</strong> ${arreglo.length}<p/>`);
