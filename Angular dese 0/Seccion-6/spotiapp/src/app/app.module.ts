import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SharedComponent } from './components/shared/shared.component';
import { SearchComponent } from './components/search/search.component';
import {  RouterModule } from '@angular/router';;
import { HttpClientModule } from '@angular/common/http'
import { ROUTES } from './app.routes';
import { NoimagePipe } from './pipes/noimage.pipe';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
<<<<<<< HEAD
=======
import { LoadingComponent } from './components/shared/loading/loading.component';
import { DomseguroPipe } from './pipes/domseguro.pipe';


>>>>>>> a8a7fe5ffcd04c2eb2c7a1d44fb3a4d8aacc2fc7




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArtistaComponent,
    NavbarComponent,
    SharedComponent,
    SearchComponent,
<<<<<<< HEAD
    NoimagePipe, 
    TarjetasComponent
=======
    NoimagePipe,
    TarjetasComponent,
    LoadingComponent,
    DomseguroPipe
>>>>>>> a8a7fe5ffcd04c2eb2c7a1d44fb3a4d8aacc2fc7
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
