import { Component, OnInit } from '@angular/core';
import { Subject, BehaviorSubject, ReplaySubject, AsyncSubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  ngOnInit(){

  	//Subject
  	const subj = new Subject<number>();

  	const sub1 = subj.subscribe(x => console.log("sub1: ", x));
  	const sub2 = subj.subscribe(x => console.log("sub2: ", x));
  	const sub3 = subj.subscribe(x => console.log("sub3: ", x));

  	subj.next(1);

  	sub1.unsubscribe();

  	subj.next(2);


  	//BehaviorSubject maintient la dernière valeur émise
	const behaviorSubject = new BehaviorSubject(0); // On passe comme valeur initiale 0
	behaviorSubject.subscribe( valeur => console.log('Behavior Observer 1 : ' + valeur)); // Log 0 toute suite puis 1
	behaviorSubject.next(1);
	behaviorSubject.subscribe( valeur => console.log('Behavior Observer 2 : ' + valeur)); // Log 1


	//AsyncSubject - transmission de la dernière valeur lors de l'appel à complete
	const asyncSubject = new AsyncSubject<number>();

	asyncSubject.next(1);
	asyncSubject.next(2);

	asyncSubject.subscribe(v => console.log('async observer : ' + v));

	asyncSubject.next(3);
	asyncSubject.complete();
	//https://embed.plnkr.co/3QAbza00V36EQv7N5seO/


	//Replay Subject -  transmission des valeurs mémorisées lors de nouvelles subscriptions
	const replaySubject = new ReplaySubject(10, 500); //10 valeurs, timeout 500ms

	setTimeout(() => replaySubject.next(1), 300);
	setTimeout(() => replaySubject.next(2), 400);
	setTimeout(() => replaySubject.next(3), 600);
	setTimeout(() => replaySubject.next(4), 700);

	setTimeout(() => {
	  replaySubject.subscribe(
	    v => console.log('replay observer :  ' + v)
	  );
	}, 1000);

  }


}
