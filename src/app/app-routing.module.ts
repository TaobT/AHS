import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AhysListComponent } from './components/ahys-list/ahys-list.component';
import { AddInputdataComponent } from './components/add-inputdata/add-inputdata.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SearcherComponent } from './components/searcher/searcher.component';

const routes: Routes = [
  {path: '', pathMatch: 'full',  redirectTo: 'ahys'},
  {path: 'seacher', component: SearcherComponent},
  {path: 'login', component: LoginComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'add', component: AddInputdataComponent},
  {path: 'ahys', component: AhysListComponent}
];

@NgModule({
  imports: [ BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
