// Parametro obligatorio quien:string
// Parametro por defecto puede o no puede ser obligatorio ya tiene un valor por defecto objeto:string = "batiseñal" 
// Parametro que puende ser o no puede ser enviado a la funcion es opvional momento?:string 

function activar(quien:string, objeto:string = "batiseñal", momento?:string){

  let mensaje:string;

  mensaje = `${ quien } activó la ${ objeto}`;

  console.log(mensaje);

}

activar ("Gordon");