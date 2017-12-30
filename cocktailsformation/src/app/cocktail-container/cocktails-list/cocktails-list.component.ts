import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cocktail } from '../../shared/cocktail.model';

@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styleUrls: ['./cocktails-list.component.css']
})
export class CocktailsListComponent implements OnInit {

	@Input() public cocktails: Cocktail[];
	@Output() public pick: EventEmitter<number> = new EventEmitter<number>();
	
	pickCocktail(index: number): void{
		console.log(index);
		this.pick.emit(index);
	}

  constructor() { }

  ngOnInit() {
  }

}
