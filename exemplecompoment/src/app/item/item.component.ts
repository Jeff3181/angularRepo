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
}
