import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ActiveDirective } from './shared/directives/active.directive';
import { AppRoutingModule } from './app.routing';
import { PanierService } from './shared/services/panier.service';
import { CocktailModule} from './cocktail-container/cocktail.module';
import { SharedModule } from './shared/modules/shared.module';



@NgModule({
  declarations: [
    AppComponent,
    ActiveDirective
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CocktailModule,
    SharedModule
  ],
  providers: [PanierService],
  bootstrap: [AppComponent]
})
export class AppModule { }
