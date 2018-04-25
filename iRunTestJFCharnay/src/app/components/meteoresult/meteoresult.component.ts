import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-meteoresult',
  templateUrl: './meteoresult.component.html',
  styleUrls: ['./meteoresult.component.css']
})
export class MeteoresultComponent implements OnInit {

  @Input() meteoToDisplay: Object;

  constructor() { }

  ngOnInit() {
  }

}
