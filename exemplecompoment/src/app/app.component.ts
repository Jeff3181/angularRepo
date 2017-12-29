import { Component, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:  ViewEncapsulation.Emulated
})
export class AppComponent {
  
  public fruit: string;
  public fruits: string[] = [];
  @ViewChild('f') public el: ElementRef;

  constructor(){
  	
  }
  public deleteFruit(fruit: string){
  	this.fruits.splice(this.fruits.indexOf(fruit),1);
  }

  addFruit(){
  	console.log(this.el.nativeElement.value);
    this.fruits.push(this.el.nativeElement.value);
  }
}
