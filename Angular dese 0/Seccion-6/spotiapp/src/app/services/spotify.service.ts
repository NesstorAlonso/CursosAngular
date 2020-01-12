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
<<<<<<< HEAD
        'Authorization':'Bearer BQBsjYLS1oCnrVwNHEB1D71bALyQMHyzZuqsfsbSPKq1GQLzb2SlhGrCyzdqJm0NCQCvAckPaRS8AjZXd4E'
=======
        'Authorization':'Bearer BQCaIbV0pGsNhpbQIAy3U2PiZz2C6c35hARxG2pNNjAkULP0PKyKr_CwSmp3FwkptN2AuyWggUcuZi3a_Uw'
>>>>>>> a8a7fe5ffcd04c2eb2c7a1d44fb3a4d8aacc2fc7
      });

      return this.http.get(url, { headers});
   }

   getNewReleases(){

       return this.getQuery('browse/new-releases?limit=20')
       .pipe(map(data => data['albums'].items));
    
   }
   getArtistas( termino: string){

     return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
     .pipe(map(data =>  data['artists'].items));
   }
   getArtista( id: string){

    return this.getQuery(`artists/${id}`);
    //.pipe(map(data =>  data['artists'].items));
  }
  getTopTracks( id: string){

    return this.getQuery(`artists/${id}/top-tracks?country=us`)
    .pipe(map(data =>  data['tracks']));
  }
}
