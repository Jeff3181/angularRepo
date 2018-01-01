import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
	selector:'[appColor]'
})
export class ColorDirective implements OnInit{
	constructor(private el: ElementRef, private renderer: Renderer2){

	}
	ngOnInit(){
		//this.el.nativeElement.style.color = 'red';
		//this.renderer.setStyle(this.el.nativeElement, 'color', 'red');


	}

	@HostListener('click') click(){

		//this.renderer.setStyle(this.el.nativeElement, 'background-color', 'black');
		this.backgroundColor = 'black';
	}

	@HostBinding('style.backgroundColor') backgroundColor = 'transparent';
	@HostBinding('style.color') color = 'blue';

	//other exemple https://plnkr.co/edit/jOeLeysHOgEBonhjS4x2?p=info
}