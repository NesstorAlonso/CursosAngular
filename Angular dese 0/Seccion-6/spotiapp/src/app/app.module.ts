import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SharedComponent } from './components/shared/shared.component';
import { SearchComponent } from './components/search/search.component';
import {  RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { ROUTES } from './app.routes';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArtistaComponent,
    NavbarComponent,
    SharedComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    RouterModule.forRoot( ROUTES, { useHash: true} )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
