import { Component, OnInit, VERSION } from '@angular/core';
import { FormGroup,FormControl,FormControlName } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  loginForm : FormGroup;

  storage_list :Array<any> = []

  
  ngOnInit(){
    this.loginForm = new FormGroup({
    username : new FormControl(''),
    password : new FormControl(''),
    gender : new FormControl(''),
    })

  }

  onsubmit(){
    let a = this.loginForm.value;
    console.log(a)
    this.storage_list.push(a)
    console.log(this.storage_list)
    this.loginForm.reset()
  }
  ondelete(i:any){
    this.storage_list.splice(i,1)
  }


}
