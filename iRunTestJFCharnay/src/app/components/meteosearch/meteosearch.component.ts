import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { SearchMeteoService } from './../../core/services/search-meteo.service';

@Component({
  selector: 'app-meteosearch',
  templateUrl: './meteosearch.component.html',
  styleUrls: ['./meteosearch.component.css']
})
export class MeteosearchComponent implements OnInit {

  @ViewChild('city') city: ElementRef;

  meteoToDisplay: Object;

  constructor(private meteoService: SearchMeteoService) { }

  ngOnInit() {

  }

  searchMeteo() {
    this.meteoService.getMeteo(this.city.nativeElement.value).subscribe( meteo => {
      //this.meteoToDisplay = meteo;
      meteo.console.log(meteo);
    });
  }
}
