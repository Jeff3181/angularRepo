import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../../shared/models/cocktail.model';
import { CocktailService } from '../../shared/services/cocktail.service';
import {Ingredient} from '../../shared/models/ingredient.model';
import { PanierService} from '../../shared/services/panier.service';
import { ActivatedRoute, Params } from '@angular/router';



@Component({
  selector: 'app-cocktails-details',
  templateUrl: './cocktails-details.component.html',
  styleUrls: ['./cocktails-details.component.css']
})
export class CocktailsDetailsComponent implements OnInit {

	//public cocktail =  new Cocktail('Mojito', 'http://static.cuisineaz.com/610x610/i14978-recette-de-mojito.jpeg', 'Le mojito1, prononcé [moˈxito] en espagnol, est un cocktail à base de rhum, de citron vert et de feuilles de menthe fraîche, né à Cuba dans les années 1910 et inspiré du mint julep. Dans les pays francophones mojito est parfois prononcé morito, voire mohito.');

	cocktail: Cocktail;
  public index: number;

  	constructor(private activatedRoute: ActivatedRoute, private cocktailService: CocktailService, private panierService: PanierService ) { }

  ngOnInit() {
  	this.activatedRoute.params.subscribe((params: Params) =>{
      if(params.index){
        this.index = params.index;
      }else{
        this.index = 0;
      }
      this.cocktailService.getCocktail(this.index).subscribe( (cocktail: Cocktail) => this.cocktail = cocktail );
    })
  }

  addPanier(ingredients: Ingredient[]): void{
    this.panierService.addIngredients(ingredients);
  }

  getUrl(): string[]{
    return ['/cocktails', this.index + '', 'edit'];
  }
}
