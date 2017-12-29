import { Component, Input, ViewChild, ContentChild, ElementRef,
 OnChanges, 
 OnInit, 
 DoCheck, 
 AfterContentInit,
 AfterContentChecked,
 AfterViewInit,
 AfterViewChecked,
 OnDestroy } from '@angular/core';

@Component({
  selector: 'app-item',
  template: '<p>{{ data }}</p>'
})
export class ItemComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

	@Input('') public data: string;
	
 	constructor() {
    console.log("Constructor : ", this.data);
  }

  //Invoqué à chaque modification sur une propriété lié avec @Input
 	ngOnChanges(simpleChange){
     console.log("ngOnChanges");
     console.log("On change : ", this.data);
   }

   //Initialisation lourde du component, appel aux API, fonction async...
   //Exécuté 1 seule fois
   //Déclenché une fois après le ngOnchanges initial
  ngOnInit(){
     console.log("On Init : ", this.data);
   }

   //Appelé à chaque fois qu'une action est suceptible de modifier le component
  ngDoCheck(){
    console.log("ng Do Check ");
   }

   //Lié au ng-content (transfert de contenu HTML), déclenché une fois après le 1er ngDoCheck
  ngAfterContentInit(){
    console.log("ng After Content Init ");
  }

  //Déclenché après chaque vérification du ng-content
  ngAfterContentChecked(){
    console.log("ng After Content checked ");
  }

  //Déclenché une fois après l'initialisation du template du component
  ngAfterViewInit(){
    console.log("ng After View init ");
  }

  //Déclenché après chaque vérification du template
  ngAfterViewChecked(){
    console.log("ng After View checked ");
  }


//appelé après de la destruction du component
 ngOnDestroy(){
    console.log("ng On Destroy ");
  }

}
