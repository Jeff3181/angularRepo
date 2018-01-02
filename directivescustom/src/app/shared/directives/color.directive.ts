import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
	selector:'[appColor]'
})
export class ColorDirective implements OnInit{

	@HostBinding('style.backgroundColor') backgroundColor = 'transparent';
	@HostBinding('style.color') color = 'blue';
	@Input('appColor') data;
	
	constructor(private el: ElementRef, private renderer: Renderer2){

	}
	ngOnInit(){
		//this.el.nativeElement.style.color = 'red';
		//this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
		this.color = this.data.text;

	}

	@HostListener('click') click(){

		//this.renderer.setStyle(this.el.nativeElement, 'background-color', 'black');
		this.backgroundColor = this.data.background;
	}


	//other exemple Attribute Directive https://plnkr.co/edit/jw2ThYhya5JF1bs4h2xD
	//other exemple HostListener https://plnkr.co/edit/hWkg0w7bLrGj5QYxG1LI
	//other exemple HostBinding https://plnkr.co/edit/jOeLeysHOgEBonhjS4x2?p=info
	//https://plnkr.co/edit/yiF7WIbhstGKnApIprze
}