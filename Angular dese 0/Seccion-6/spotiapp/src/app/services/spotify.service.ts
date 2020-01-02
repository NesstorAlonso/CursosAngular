import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http:HttpClient) {
    console.log('Spotify service listo ');
   }

   getNewReleases(){
      const headers = new HttpHeaders({
        'Authorization':'Bearer BQAVj7m1d5AldxnW4nQcTd5O2Cht6mZJ8ww-5On1ZJfTPPhN5CVBmWl7c4f9bRPlFj2JlUDSUCmwSvkfKwQ'
      });

       return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers});
    
   }
}
