
// Uso de Let y Const
var nombre = "Ricardo Tapia";
var edad = 23;

var PERSONAJE = {
  nombre: nombre,
  edad: edad
};


// Cree una interfaz que sirva para validar el siguiente objeto
interface heroe{
  nombre:string;
  artesMarciales:[];
}


function nombreHeroe( heroe :{nombre:string}) {
  console.log("El nombre del heroe es: " + heroe.nombre)
}
function abilidades(heroe:{  artesMarciales:[]}){
  console.log("Sus abilidades del heroe son: " + heroe.artesMarciales);
}


var batman = {
  nombre: "Bruno Díaz",
  artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
}

// Convertir esta funcion a una funcion de flecha
function resultadoDoble( a, b ){
  return (a + b) * 2
}

// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
function getAvenger( nombre:string, poder="fuerza", arma?:string ){
  var mensaje;
  if( poder ){
     mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
  }else{
     mensaje = nombre + " tiene un " + poder
  }
};

// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.


class rectangulo{
  base:number = 5;
  altura:number = 8;

  constructor(base:number, altura:number){
    this.base = base;
    this.altura = altura;
  }
}

let area:rectangulo = new rectangulo( "Antaman", "Capitan America","Scot",true,1);


console.log(antman);
