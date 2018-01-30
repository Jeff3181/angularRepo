import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipepursetimpurs',
  templateUrl: './pipepursetimpurs.component.html',
  styleUrls: ['./pipepursetimpurs.component.css']
})
export class PipepursetimpursComponent implements OnInit {

	public names = [
		'Louis',
		'Louise',
		'Tintin',
		'Milou',
		'Juliette'
	]


  constructor() { }

  ngOnInit() {
  }

  //comment

}
