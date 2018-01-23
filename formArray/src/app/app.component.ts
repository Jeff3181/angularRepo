import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators} from '@angular/forms';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
  input.ng-valid.ng-dirty{border:1px solid green}
  input.ng-invalid.ng-dirty{border:1px solid red}
  `]
})
export class AppComponent implements OnInit{
	public myForm: FormGroup;
  @ViewChild('confirm') public confirm: ElementRef;

  ngOnInit(){
  	this.myForm = new FormGroup({
     
  		username: new FormControl(''),
  	  email: new FormControl(''),
      hobbies: new FormArray([]),
  		password: new FormControl(''),
  	})
  	console.log(this.myForm);
  	//SetValue tous les champs doivent être complétés
  	/*this.myForm.setValue({
  		username: 'jean',
  		email: 'jean@live.fr',
  		password: '1234'
  	})*/

  	//PacthValue ne set que les champs renseignés
  	/*this.myForm.patchValue({
  		username: 'Paul'
	})*/
  }

  addHobby(): void{
    (<FormArray>this.myForm.get('hobbies')).controls.push(new FormControl(''))
  }

  submit(){
  	console.log(this.myForm);
  	//this.myForm.reset();
  }
  //https://plnkr.co/edit/RxfBHLnIhRsezvSKpGO1?p=info
  //https://plnkr.co/edit/hnVN3iFh1v7Ue7EcliID?p=info
  //https://plnkr.co/edit/ptz7YJNJocmtitBQl9Xh?p=info
  //https://plnkr.co/edit/7v2QHCLWoxlM1vqlbxmR
  //https://plnkr.co/edit/DJAwV13fmeW8knsswFA9?p=info
  //https://plnkr.co/edit/KeMUgUEYpUtZtB2ZTwGP?p=info
  //https://plnkr.co/edit/S7L8Mb0MLpxuU6J7ceiW?p=preview
  //https://plnkr.co/edit/4VfbUFOpK3LMUHHOoNX6?p=preview
}
