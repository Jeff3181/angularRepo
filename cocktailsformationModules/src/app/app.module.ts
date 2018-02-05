import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ActiveDirective } from './shared/directives/active.directive';
import { PanierComponent } from './panier/panier.component';
import { IngredientsListComponent } from './panier/ingredients-list/ingredients-list.component';
import { AppRoutingModule } from './app.routing';
import { PanierService } from './shared/services/panier.service';
import { CocktailModule} from './cocktail-container/cocktail.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ActiveDirective,
    PanierComponent,
    IngredientsListComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CocktailModule
  ],
  providers: [PanierService],
  bootstrap: [AppComponent]
})
export class AppModule { }