import { Component, OnInit } from '@angular/core';
import { Hero } from '../common/model/hero';
import { HEROES } from '../common/model/mock-heroes';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

	heroes: Hero[] = HEROES;
	selectedHero: Hero;

	onSelect(hero: Hero){
		this.selectedHero = hero;
	}

  constructor() { }

  ngOnInit() {
  }

}
