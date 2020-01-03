let prom1 = new Promise(function(resolver, reject){

  setTimeout( () =>{
    console.log("Promesa Terminada")

    //Termina bien
    //resolver();
    //Termina Mal
    reject();
  }, 1500)

})

console.log("Paso 1");

prom1.then(function(){
  console.log("Ejecutarme cuando se termine bien!");
}, 
function(){
  console.error("Ejecutarse si esta mal");
})

console.log("Paso 2");