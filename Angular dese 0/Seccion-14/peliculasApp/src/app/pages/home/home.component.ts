import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  cartelera: any;

  //peliculasPopulares: any [] = [];
  constructor( private pelicula: PeliculasService ) {
  
    // this.pelicula.getPopulares()
    // .subscribe((data:any) => {
    //   console.log(data);
    //   this.peliculasPopulares=data;
    // })

   this.pelicula.getCartelera()
   .subscribe((data:any) => {
     console.log(data);
     this.cartelera = data;
   })

   }

 
  ngOnInit() {
  }

}
