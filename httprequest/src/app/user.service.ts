import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  public getUsers(){
  	return this.http.get<{name: string}[]>('https://http-df271.firebaseio.com/users.json', );
  }

  public createUsers(users: {name: string}[]){
  	return this.http.put('https://http-df271.firebaseio.com/users.json', users);
  }
}
