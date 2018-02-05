import  { NgModule } from '@angular/core';
import  { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CocktailsListComponent } from './cocktails-list/cocktails-list.component';
import { CocktailsDetailsComponent } from './cocktails-details/cocktails-details.component';
import { CocktailContainerComponent } from './cocktail-container.component';
import { CocktailEditComponent } from './cocktail-edit/cocktail-edit.component';
import { FilterPipe } from '../shared/pipes/filter.pipe';
import { CocktailRouting } from './cocktail.routing';


@NgModule({
	declarations:[
		CocktailsListComponent,
    	CocktailsDetailsComponent,
   		CocktailContainerComponent,
   		CocktailEditComponent,
    	FilterPipe
	],
	imports: [
		CommonModule,
		FormsModule,
    	ReactiveFormsModule,
    	RouterModule,
    	CocktailRouting
	],
	providers:[],
	exports:[]
})
export class CocktailModule{}