import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public date = Date.now();
  public nom = "jean";

  //https://plnkr.co/edit/PLUgobKTyELJMcgODNnp?p=preview
  //https://plnkr.co/edit/44qcEoT3mAN3g5bS2LJT?p=preview
  //https://plnkr.co/edit/uBPt0E47YGo01oNtfsHq?p=preview
}
