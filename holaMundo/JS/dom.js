'use strict'

//DOM = document object mode 



/*
var id = document.getElementById("mi caja");
function cambiaColor(color) {
    id.style.background = color;
}*/

// sin nada para el nombre de la etiqueta
//con"#" para el nombre del id
//con el "." para la clase



//CONSEGUIR ELEMENTOS CON ID CONCRETO


/*id.querySelector("#mi caja")

//id.innerHTML = "Texto en la caja con innerHTML";
id.style.background = "red";
id.style.color = "white";
id.style.padding = "10px";

id.className = "Hola";

//console.log(id);*/




//conseguir elementos por su etiqueta 
var conseguirDivs = document.getElementsByTagName("div");

var divs = new Array(conseguirDivs.length);

for (var i = 0; i < conseguirDivs.length; i++) {
    if (typeof conseguirDivs[i].textContent === 'string') {
        divs[i] = conseguirDivs[i].textContent;
    }
}

console.log(conseguirDivs);
console.log(divs);
//conseguir elementos or su clase
