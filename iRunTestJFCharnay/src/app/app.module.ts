import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from './modules/material.module';
import { MeteosearchComponent } from './components/meteosearch/meteosearch.component';
import { SearchMeteoService } from './core/services/search-meteo.service';
import { HttpClientModule } from '@angular/common/http';
import { MeteoresultComponent } from './components/meteoresult/meteoresult.component';


@NgModule({
  declarations: [
    AppComponent,
    MeteosearchComponent,
    MeteoresultComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    MaterialModule,
    HttpClientModule
  ],
  providers: [SearchMeteoService],
  bootstrap: [AppComponent]
})
export class AppModule {}
