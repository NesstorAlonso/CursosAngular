import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http:HttpClient) {
    console.log('Spotify service listo ');
   }

   getQuery(query: string){
      const url = `https://api.spotify.com/v1/${query}`;

      const headers = new HttpHeaders({
        'Authorization':'Bearer BQDMmY_eeG39WNxagL1ac56eMht1uD5cbuGBtbCIlcoyOkCZye44WK_eoZmXYs1Smcp8fZE1T3BOcLtGRqQ'
      });

      return this.http.get(url, { headers});
   }

   getNewReleases(){

       return this.getQuery('browse/new-releases?limit=20')
       .pipe(map(data => data['albums'].items));
    
   }
   getArtista( termino: string){

     return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
     .pipe(map(data =>  data['artists'].items));
   }
}
