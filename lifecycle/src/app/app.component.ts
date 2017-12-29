import { Component, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:  ViewEncapsulation.Emulated
})
export class AppComponent {
  public display = true;
  public data: string='';
  title = 'app works!';
}
