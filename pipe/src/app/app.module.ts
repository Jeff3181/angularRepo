import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CbPipe } from './cb.pipe';



import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    CbPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
