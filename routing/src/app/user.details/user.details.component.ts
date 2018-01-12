import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user.details',
  templateUrl: './user.details.component.html',
  styleUrls: ['./user.details.component.css']
})
export class UserDetailsComponent implements OnInit {
	public id: string;
	public name: string;

  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit() {
  	// 2 façon de faire 

  	//activateRoute = root qui est active
  	//snapshot = état de la route au moment où ngOnInit est invoqué
  	//params = intégralité des paramètres qui sont liés au path
  	//A utiliser que pour une valeur unique / ne pas utiliser avec URL dynamique
  	
  	//this.id = this.activateRoute.snapshot.params.id;

  	//Avec un observable
  	//Pas besoin de unsuscribe car Observable fourni par Angular
	this.activateRoute.params.subscribe(params =>{
		this.id = params.id;
	})

	//Affichage de name dans le component user.details
	this.activateRoute.queryParams.subscribe(qp =>{
		this.name = qp.name;
	})

	//Affichage fragment hello dans le component user.details
	this.activateRoute.fragment.subscribe(f =>{
		console.log(f);
	})
  }

}
