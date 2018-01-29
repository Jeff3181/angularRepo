import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CbPipe } from './cb.pipe';



import { AppComponent } from './app.component';
import { PipepursetimpursComponent } from './pipepursetimpurs/pipepursetimpurs.component';


@NgModule({
  declarations: [
    AppComponent,
    CbPipe,
    PipepursetimpursComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
