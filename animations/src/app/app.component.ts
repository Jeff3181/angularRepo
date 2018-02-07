import { Component } from '@angular/core';
import { 
	trigger, 
	state,
	style,
	animate,
	transition
} from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
  	trigger('square', [
  		state('normal', style({
  			background: 'transparent',
  			border: '2px solid black',
  			borderRadius: '0px'
  		})),
  		state('wild', style({
  			background: 'red',
  			border: '0px',
  			borderRadius: '100px'
  		}))


  		])
  ]
})
export class AppComponent {
  public currentState: string = 'wild';
}
