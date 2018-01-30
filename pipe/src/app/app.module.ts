import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CbPipe } from './cb.pipe';
import { FormsModule} from '@angular/forms';




import { AppComponent } from './app.component';
import { PipepursetimpursComponent } from './pipepursetimpurs/pipepursetimpurs.component';
import { FilterPipe } from './filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CbPipe,
    PipepursetimpursComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
