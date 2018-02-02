import { Injectable } from '@angular/core';
import { HttpClient, HttpParams,HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/retry';



@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  public getUsers(){
  	const params = new HttpParams().set('clef1', 'val1').append('cle2', 'val2');

  	return this.http.get<{name: string}[]>('https://http-df271.firebaseio.com/users.json', {
  		params: params,
  		headers: new HttpHeaders().set('Authorization', 'setse')
  	} ).retry(2);
  }

  public createUsers(users: {name: string}[]){
  	return this.http.put('https://http-df271.firebaseio.com/users.json', users);
  }
}
