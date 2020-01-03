"use strict";
var Avangers = /** @class */ (function () {
    function Avangers(nombre, equipo, nombreReal, puedePelear, peleasGanas) {
        this.nombre = "Antman";
        this.equipo = "Capitan America";
        this.nombreReal = "Tomy";
        this.puedePelear = false;
        this.peleasGanadas = 4;
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
        this.peleasGanadas = peleasGanas;
        this.puedePelear = puedePelear;
    }
    return Avangers;
}());
var antman = new Avangers("Antaman", "Capitan America", "Scot", true, 1);
console.log(antman);
