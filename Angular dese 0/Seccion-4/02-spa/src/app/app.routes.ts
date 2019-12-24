import { RouterModule, Routes } from '@angular/router';
import { Component, NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';


const APP_ROUTER: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '**', pathMatch: 'full', redirectTo:''}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTER);