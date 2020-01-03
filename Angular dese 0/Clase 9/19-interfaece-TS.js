"use strict";
function enviarMision(xmen) {
    console.log("Enviando a: " + xmen.nombre + "Y tiene el poder: " + xmen.poder);
}
;
function enviarCuarte(xmen) {
    console.log("Enviando al cuartel: " + xmen.nombre);
}
;
var wolverine = {
    nombre: "Wolverine",
    poder: "Regeneracion"
};
enviarMision(wolverine);
enviarCuarte(wolverine);
