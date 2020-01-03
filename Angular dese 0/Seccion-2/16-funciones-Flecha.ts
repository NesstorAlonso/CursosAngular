let miFuction2 = function (a:number, b:number){
  return a + b;
}

let miFuction2F = (a:number, b: number) => a + b;

let miFuction3 = function (nombre: string){
  nombre = nombre.toUpperCase();
  return nombre;
}
let  miFuction3F = (nombre : string )=>{
  nombre = nombre.toUpperCase();
  return nombre;
}

let nombre = "pedro"
let hulk = {
  nombre: "Hulk",
  smash(){
    setTimeout(function(){
    console.log(this.nombre + " smash!!");
  }, 1500);
}
}

//En otra palabra una de las principales funciones de las funciones de flecha es que el this no es afectado cuando se 
//ejecuta dentro de otra funcion 
hulk.smash();