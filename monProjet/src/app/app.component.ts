import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'the jamrock!';
  nombre: number = 10;
  bool: boolean = true;
  width: string = '200px';
  height: string = '200px';
  color: string = 'red';
  obj:{}={
  	cle: 'ma cle'
  }
  square(nbr: number): number{
  	return (nbr*nbr);
  }
  date: string = "radio";

  changeColor(color: string, size: string):void{
      if(this.color !=="green"){
      	this.color = color;
      }
      
      this.width=size;
      this.height=size;
  }
 changeColor1(color: string, size: string):void{
     console.log(color +' '+size);

 }

 public content: String ='';
 catchInput(event: Event){
	console.log(event);
 	this.content = (<HTMLInputElement>event.target).value;
 }

  public contentDb: String='Bonjour';
  public display: boolean = true;
  public couleur: String ='';
  public coul: String ='';
  public users: Array<{nom}> = [];
  
  constructor(){
  	this.users.push({nom: "jean"});
  	this.users.push({nom: "julie"});
  	this.users.push({nom: "paul"});
  }
}