import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }
  redi(){
  	// le 2eme param  {relativeTo: this.activatedRoute} permet l'utiliation de chemin relatif, par défaut navigate prend un path absolu
  	this.router.navigate(['users'], {relativeTo: this.activatedRoute});
  }
}
