import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearcherComponent } from './components/searcher/searcher.component';
import { AddInputdataComponent } from './components/add-inputdata/add-inputdata.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AhysListComponent } from './components/ahys-list/ahys-list.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import Amplify, { Auth } from 'aws-amplify';
import { AddLocalsComponent } from './components/add-locals/add-locals.component';

Amplify.configure({
  Auth:{
    mandatorySignIn: true,
    region: 'us-east-1',
    userPoolId: 'us-east-1_r0u2GmUn6',
    userPoolWebClientId: '5jok22vuskus16o4uliun7ovb9',
    authenticationFlowTyp: 'USER_PASSWORD_AUTH'
  }
})

@NgModule({
  declarations: [
    AppComponent,
    SearcherComponent,
    AddInputdataComponent,
    AhysListComponent,
    LoginComponent,
    SignUpComponent,
    AddLocalsComponent
  ],
  imports: [ 
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
