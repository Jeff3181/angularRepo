import { Component, OnInit} from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit(){

  	const observer: Observer<any> = {
	next: x => console.log('Observer a reçu une valeur : ' + x),
	error: err => console.log('Observer a reçu une erreur : ' + err),
	complete: () => console.log('Observer a reçu une notification de complétion')
  	};

  	const obs = Observable.create(observer =>{
  		observer.next(1);
  		observer.next(2);
  		setTimeout(function(){
  			observer.next(42);
  			observer.complete();
  			observer.next(42);
  		}, 2000);
  	})

  	const sub: Subscription = obs.subscribe( x => {
  		console.log(x);
  	})
  	obs.subscribe(observer);
  }
  //Complément doc rxjs https://makina-corpus.com/blog/metier/2017/premiers-pas-avec-rxjs-dans-angular
  
}
