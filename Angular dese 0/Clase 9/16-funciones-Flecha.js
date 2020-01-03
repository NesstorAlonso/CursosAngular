"use strict";
var miFuction2 = function (a, b) {
    return a + b;
};
var miFuction2F = function (a, b) { return a + b; };
var miFuction3 = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
var miFuction3F = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
var nombre = "pedro";
var hulk = {
    nombre: "Hulk",
    smash: function () {
        setTimeout(function () {
            console.log(this.nombre + " smash!!");
        }, 1500);
    }
};
//En otra palabra una de las principales funciones de las funciones de flecha es que el this no es afectado cuando se 
//ejecuta dentro de otra funcion 
hulk.smash();
