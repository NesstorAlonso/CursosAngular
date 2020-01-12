import { Component,  } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

<<<<<<< HEAD
  artistas:any[] = [];
=======
  artistas: any [] = [];
  loading : boolean;
>>>>>>> a8a7fe5ffcd04c2eb2c7a1d44fb3a4d8aacc2fc7

  constructor( private spotify: SpotifyService) {
    
   }
  

  buscar( termino : string){
<<<<<<< HEAD
     console.log(termino);
     this.spotify.getArtista( termino )
     .subscribe((data:any) =>{
      this.artistas = data;
      console.log(data);

=======
    this.loading = true;
     this.spotify.getArtistas( termino )
     .subscribe((data: any) =>{
      this.artistas = data;
      console.log(data);
      this.loading = false;
>>>>>>> a8a7fe5ffcd04c2eb2c7a1d44fb3a4d8aacc2fc7

     });


  }

}
