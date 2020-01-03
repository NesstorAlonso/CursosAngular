class Avangers{
    nombre:string = "Antman";
    equipo:string = "Capitan America";
    nombreReal:string ="Tomy";

    puedePelear:boolean = false;
    peleasGanadas:number = 4;

    constructor(nombre:string, equipo:string, nombreReal:string, puedePelear:boolean, peleasGanas:number){
            this.nombre = nombre;
            this.equipo = equipo;
            this.nombreReal = nombreReal;
            this.peleasGanadas = peleasGanas;
            this.puedePelear = puedePelear;
        }

}

let antman:Avangers = new Avangers( "Antaman", "Capitan America","Scot",true,1);


console.log(antman);