import { Injectable } from '@angular/core';
import { Lista } from '../peges/models/lista.model';
import { createUrlResolverWithoutPackagePrefix } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  lista: Lista[] = [];

  constructor() {
    
    // const lista1 = new Lista('Recolectar piedars del infinito');
    // const lista2 = new Lista('Héroes a desaparecer');

    // this.lista.push(lista1, lista2);
    this.cargarStorage();
  }

    crearLista( titulo: string ){
        
      const nuevaLista = new Lista(titulo);
      this.lista.push(nuevaLista );
      this.guardarStorage();

      return nuevaLista.id;
    
   }

   obtenerLIsta(id: string | number){
     id = Number(id);

     return this.lista.find( listaData => listaData.id === id );
   }

   guardarStorage(){
     localStorage.setItem('data', JSON.stringify(this.lista));
   }

   cargarStorage(){
      
    if( localStorage.getItem('data')){
      this.lista = JSON.parse( localStorage.getItem('data'));
    }else{
      this.lista = [];
    }
   }
}
