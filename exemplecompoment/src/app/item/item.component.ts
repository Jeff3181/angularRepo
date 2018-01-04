import { Component, OnInit, Input, EventEmitter, Output, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html'
})
export class ItemComponent implements OnInit {

	@Input('f') public fruit: string;
	@Output() public deleteF: EventEmitter<string> = new EventEmitter();
	@ContentChild('p') public el: ElementRef;
 	constructor() { }

 	ngOnInit() {
  	}
  	supprimeFruit(){
  		//this.deleteF.emit(this.fruit);
  		console.log(this.el);
  	}

    // communication entre composants https://plnkr.co/edit/qtvPLSNriWrGQhd7O9Z9?p=info
    // Input https://plnkr.co/edit/qtvPLSNriWrGQhd7O9Z9?p=info
    //Input https://plnkr.co/edit/UlqfkUw3yQFROUrkNVQF
    //output https://plnkr.co/edit/P706FjEaiU3R6kTOggCP
    //Output alias https://plnkr.co/edit/o8Cpe3A11WpdxDoULXlH
    //local variable https://plnkr.co/edit/vYTKfLdaa8oRjWw80vcr
    //viewChild https://plnkr.co/edit/aZVShOJPSDrEH8SfXu6u
    //ngContent https://plnkr.co/edit/SNEro7or8h0wBrVeFWfU
    //ngContent https://plnkr.co/edit/aY8G4sbaE7PRZ05azXhq
    //contentChild https://plnkr.co/edit/aY8G4sbaE7PRZ05azXhq
}
