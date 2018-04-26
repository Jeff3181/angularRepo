import { Component, OnInit, Input } from '@angular/core';
import { SearchMeteoService } from '../../core/services/search-meteo.service';

@Component({
  selector: 'app-meteoresult',
  templateUrl: './meteoresult.component.html',
  styleUrls: ['./meteoresult.component.css']
})
export class MeteoresultComponent implements OnInit {

  @Input() meteoToDisplay: Object;
  URL_IMAGE = 'http://openweathermap.org/img/w/';
  FILE_EXT = '.png';

  constructor(private meteoService: SearchMeteoService) { }

  ngOnInit() {
  }

  getIcon(): string {
    console.log(this.URL_IMAGE + this.meteoToDisplay.weather[0].icon + this.FILE_EXT);
    return this.URL_IMAGE + this.meteoToDisplay.weather[0].icon + this.FILE_EXT ;
  }
}
