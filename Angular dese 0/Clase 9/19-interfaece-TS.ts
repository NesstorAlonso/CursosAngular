interface Xmen{
  nombre:string,
  poder:string
}

function enviarMision( xmen : {nombre:string, poder:string}){
  console.log("Enviando a: " + xmen.nombre + "Y tiene el poder: " + xmen.poder);
};

function enviarCuarte( xmen :{ nombre:string}){
  console.log("Enviando al cuartel: " + xmen.nombre);
};

let wolverine:Xmen = {
  nombre: "Wolverine",
  poder: "Regeneracion"
}

enviarMision(wolverine);
enviarCuarte(wolverine);