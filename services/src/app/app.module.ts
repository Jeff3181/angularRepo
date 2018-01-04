import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { PanierComponent } from './panier/panier.component';


@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    PanierComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
