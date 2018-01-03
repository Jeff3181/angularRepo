import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
	selector:'[appNgIfCustom]'
})
export class NgIfCustom {

	 @Input() set appNgIfCustom(condition: boolean){
	 	if(condition){
	 		this.vcRef.createEmbeddedView(this.templateRef);
	 	} else{
	 		this.vcRef.clear();
	 	}
	 }
	
	constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef){

	}
	


	//https://plnkr.co/edit/3mlBL1f7AYq6AMGssLZ2?p=info
}