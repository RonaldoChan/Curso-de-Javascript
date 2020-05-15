

var boton = document.querySelector("#boton");

function cambiarColor() {

    console.log("me has dado click");
    var bg = boton.style.background;

    if (bg == "red") {
        boton.style.background = "blue";
        boton.style.color = "red";
    }
    else {
        boton.style.background = "red";
        boton.style.color = "blue";
    }

    return true;
}