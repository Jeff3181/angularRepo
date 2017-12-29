import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../../shared/cocktail.model';


@Component({
  selector: 'app-cocktails-details',
  templateUrl: './cocktails-details.component.html',
  styleUrls: ['./cocktails-details.component.css']
})
export class CocktailsDetailsComponent implements OnInit {

	//public cocktail =  new Cocktail('Mojito', 'http://static.cuisineaz.com/610x610/i14978-recette-de-mojito.jpeg', 'Le mojito1, prononcé [moˈxito] en espagnol, est un cocktail à base de rhum, de citron vert et de feuilles de menthe fraîche, né à Cuba dans les années 1910 et inspiré du mint julep. Dans les pays francophones mojito est parfois prononcé morito, voire mohito.');

  	constructor() { }

  ngOnInit() {
  }

}
