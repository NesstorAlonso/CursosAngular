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
hulk.smash();
