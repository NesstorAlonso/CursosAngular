import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './pages/shared/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { BuscarComponent } from './pages/buscar/buscar.component';



// importar rutas
import { PeliculaComponent } from './pages/pelicula/pelicula.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


// Servicios
import { PeliculasService } from './services/peliculas.service';
import { ROUTES } from './pages/app.routes';
import { PeliculaImagenPipe } from './pipes/pelicula-imagen.pipe';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BuscarComponent,
    PeliculaComponent,
    PeliculaImagenPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
    FormsModule,
    HttpClientModule
  ],
  providers: [ PeliculasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
