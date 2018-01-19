import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PanierComponent } from './panier/panier.component';
import { CocktailContainerComponent } from './cocktail-container/cocktail-container.component';
import { CocktailsDetailsComponent } from './cocktail-container/cocktails-details/cocktails-details.component';

const APP_ROUTE: Route[] = [
	{path:'', redirectTo: 'cocktails', pathMatch:'full'},
	{path: 'panier', component: PanierComponent},
	{path: 'cocktails', component: CocktailContainerComponent, children:[
		{ path: '', component: CocktailsDetailsComponent },
		{ path: ':index', component: CocktailsDetailsComponent },
	]}
];

@NgModule({
  imports: [ RouterModule.forRoot(APP_ROUTE) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}