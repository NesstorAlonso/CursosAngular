// Parametro obligatorio quien:string
// Parametro por defecto puede o no puede ser obligatorio ya tiene un valor por defecto objeto:string = "batiseñal" 
// Parametro que puende ser o no puede ser enviado a la funcion es opvional momento?:string 
function activar(quien, objeto, momento) {
    if (objeto === void 0) { objeto = "batiseñal"; }
    var mensaje;
    mensaje = quien + " activ\u00F3 la " + objeto;
    console.log(mensaje);
}
activar("Gordon");
