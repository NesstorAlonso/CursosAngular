import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';



@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    
  ],
  providers: [
  //  { provide: LOCALE_ID, useValue: 'es' }
    // { provide: LOCALE_ID, useValue: "es" }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
