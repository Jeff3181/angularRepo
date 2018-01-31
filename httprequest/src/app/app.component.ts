import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

	public username: string;
	private currentId: nmuber = 2;
	public users = [{
		id: 0,
		username: "Louis",
		age: 18
	},{
		id: 1,
		username: "Paul",
		age: 15
	},{
		id: 3,
		username: "Jean",
		age: 42
	}]

	constructor(){}

	ngOnInit(){
		this.currentId = this.users.length -1;
	}
	addUser(){
		this.currentId++;
		this.users.push({
			id: this.currentId,
			username: this.username,
			age: 35
		})
		this.username= '';
	}
	//https://console.firebase.google.com/project/http-df271/database/http-df271/data
}
