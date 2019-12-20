let avenger = {
  nombre: "Steve",
  clave : "Capitan America",
  poder : "Droga"
}
let { nombre, clave, poder } = avenger;

// let nombre: avenger.nombre;
// let clave: avenger.clave;
// let poder: avenger.poder;

console.log(nombre, clave, poder);
//console.log (avenger);


let vengadores:string[] = ["Thor", "Steve", "Tony"];

let [thor, capi, ironman] = vengadores;

console.log(thor, capi, ironman);