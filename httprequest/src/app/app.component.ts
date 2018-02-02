import { Component , OnInit} from '@angular/core';
import { UserService} from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

	public users: {name: string}[];
	
	public user: string;
		

	constructor(private userService: UserService){}

	ngOnInit(){
		this.userService.getUsers().subscribe(users =>{
			console.log(users);
			if (users){
				this.users = users
			}else{
				this.users = [];
			}
		}, err =>{

		})
	}
	addUser(){
		this.users.push({name: this.user });
		this.userService.createUsers(this.users).subscribe( res => {
			this.user = '';
			console.log(res);
		});
	}
	//https://console.firebase.google.com/project/http-df271/database/http-df271/data
}
