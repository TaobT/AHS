import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearcherComponent } from './components/searcher/searcher.component';
import { AddInputdataComponent } from './components/add-inputdata/add-inputdata.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AhysListComponent } from './components/ahys-list/ahys-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SearcherComponent,
    AddInputdataComponent,
    AhysListComponent
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
