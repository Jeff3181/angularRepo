import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../shared/cocktail.model';

@Component({
  selector: 'app-cocktail-container',
  templateUrl: './cocktail-container.component.html',
  styleUrls: ['./cocktail-container.component.css']
})
export class CocktailContainerComponent implements OnInit {


	public cocktails: Cocktail[] = [
		new Cocktail('Mojito', 'http://static.cuisineaz.com/610x610/i14978-recette-de-mojito.jpeg', 'Le mojito1, prononcé [moˈxito] en espagnol, est un cocktail à base de rhum, de citron vert et de feuilles de menthe fraîche, né à Cuba dans les années 1910 et inspiré du mint julep. Dans les pays francophones mojito est parfois prononcé morito, voire mohito.'),
		new Cocktail('Margarita', 'http://cmzone.vzbqbxhynotw9ion96xv.netdna-cdn.com/wp-content/uploads/2017/06/Tequila-Drinks-to-Enjoy-This-Summer-new.jpg', 'La Margarita est un cocktail à base de tequila, inventé par des Américains au Mexique. C\'est un before lunch qui serait une version du cocktail daisy dans lequel on remplaça le brandy par de la téquila ...' ),
		new Cocktail('Sour', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/A_whiskey_sour_in_the_hand.jpg/220px-A_whiskey_sour_in_the_hand.jpg', 'A sour is a traditional family of mixed drinks. Common examples of sours are the margarita and the sidecar. Sours belong to one of the old families of original cocktails and are described by Jerry Thomas in his 1862 book How to Mix Drinks.' )
	];


  constructor() { }

  ngOnInit() {
  }

}
