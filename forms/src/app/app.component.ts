import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit{
	public myForm: FormGroup;

  ngOnInit(){
  	this.myForm = new FormGroup({
  		username: new FormControl('', [Validators.required, this.validator1], this.validatorAsync),
  		email: new FormControl(''),
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

  validator1(formControl: FormControl): {[s: string]: boolean}{
    if (formControl.value === 'paul'){
      return { isPaul: true}
    }else{
      return null;
    }
  }

  validatorAsync(formControl: FormControl): Promise<any> | Observable<any>{
    return new Promise( (resolve, reject) => {
      setTimeout( () =>{
        resolve(null);
      }, 30000)
    })
  }

  submit(){
  	console.log(this.myForm);
  	//this.myForm.reset();
  }
  //https://plnkr.co/edit/RxfBHLnIhRsezvSKpGO1?p=info
  //https://plnkr.co/edit/hnVN3iFh1v7Ue7EcliID?p=info
  //https://plnkr.co/edit/ptz7YJNJocmtitBQl9Xh?p=info
  //https://plnkr.co/edit/7v2QHCLWoxlM1vqlbxmR
}
