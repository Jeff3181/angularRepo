import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit{
	public myForm: FormGroup;

  ngOnInit(){
  	this.myForm = new FormGroup({
  		username: new FormControl(''),
  		email: new FormControl(''),
  		password: new FormControl(''),

  	})
  }
  submit(){
  	console.log(this.myForm);
  }
  //https://plnkr.co/edit/RxfBHLnIhRsezvSKpGO1?p=info
  //https://plnkr.co/edit/hnVN3iFh1v7Ue7EcliID?p=info
}
