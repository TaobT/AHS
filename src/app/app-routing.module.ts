import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AhysListComponent } from './components/ahys-list/ahys-list.component';
import { AddInputdataComponent } from './components/add-inputdata/add-inputdata.component';
const routes: Routes = [
  {path: '', redirectTo: 'searcher', pathMatch: 'full'},
  {path: 'add', component: AddInputdataComponent},
  {path: 'ahys', component: AhysListComponent}
];

@NgModule({
  imports: [ BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
