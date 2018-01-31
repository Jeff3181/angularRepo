import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-asyncpipe',
  templateUrl: './asyncpipe.component.html',
  styleUrls: ['./asyncpipe.component.css']
})
export class AsyncpipeComponent implements OnInit {

	//public name: Promise<string>;
	public name: Observable<number>;

  constructor() { }

  ngOnInit() {
  	/*this.name = new Promise( (resolve, reject) => {
  		setTimeout( ()=>{
  			resolve('Paul')
  		}, 3000)
  	})*/

	this.name = Observable.interval(1000);

  }

}
