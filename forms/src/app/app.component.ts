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
  	console.log(this.myForm);
  	//SetValue tous les champs doivent être complétés
  	this.myForm.setValue({
  		username: 'jean',
  		email: 'jean@live.fr',
  		password: '1234'
  	})

  	//PacthValue ne set que les champs renseignés
  	this.myForm.patchValue({
  		username: 'Paul'
	})
  }
  submit(){
  	console.log(this.myForm);
  	this.myForm.reset();
  }
  //https://plnkr.co/edit/RxfBHLnIhRsezvSKpGO1?p=info
  //https://plnkr.co/edit/hnVN3iFh1v7Ue7EcliID?p=info
  //https://plnkr.co/edit/ptz7YJNJocmtitBQl9Xh?p=info
}
