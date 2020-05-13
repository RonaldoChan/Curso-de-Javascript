'use strict'

//usando un bucle, mostrar la  suma y al media de los numero
//introducidos hasta introducir un numero negativo 
//y ahí mostrar el resultado

var contador=0;
var suma=0;

do {
    
    var numero1 = parseInt(prompt("Introduzca un numero: ", 0));

    console.log(numero1);
    suma=suma+numero1;
    if(numero1 < 0){
    
        alert("numero menor que cero");

    }
    contador++;
    console.log("suma: "+ suma);
    console.log("contador: "+ contador );

} while ((numero1) > 0);

var promedio = suma / (contador);

console.log(promedio);

