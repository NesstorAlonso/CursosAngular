import { Injectable } from '@angular/core';
 
//importación de http, Jsonp, Map
import {HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
 
@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
 
  private apikey : string = "7655550b4008e6975e53cdd86caa41ae";
  private urlMoviedb : string = "https://api.themoviedb.org/3/";
 
  constructor(private http : HttpClient) { }
 
  getPopulares(){
    
    let url = `${ this.urlMoviedb }discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=es`;
 
    return this.http.get( url )
                    .pipe(map( (res:any)=>res.results));
                    console.log(map);
                    
  }

  getCartelera(){

    let desde = new Date();
    let hasta = new Date();

    hasta.setDate(hasta.getDate() + 7);

    let desdeStr = `${ desde.getFullYear()}-${desde.getMonth()+1 }-${desde.getDate()}`;
    let hastaStr = `${ hasta.getFullYear()}-${hasta.getMonth()+1 }-${hasta.getDate()}`;

    let url = `${ this.urlMoviedb }discover/movie?primary_release_date.gte=${ desdeStr }&primary_release_date.lte=${ hastaStr }.desc&api_key=${this.apikey}&language=e`;
 
    return this.http.get( url )
                    .pipe(map( (res:any)=>res.results));
                  
                    
  }
  getNiñosPopulares(){
    
    let url = `${ this.urlMoviedb }discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc.desc&api_key=${this.apikey}&language=es`;
 
    return this.http.get( url )
                    .pipe(map( (res:any)=>res.results));
                   
                    
  }
}