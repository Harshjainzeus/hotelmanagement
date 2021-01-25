import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // emailvalid(control:FormControl){
  //   // console.log(control);
  //   if(control.value==="harsh")
  //   {
  //     return null;
  //   }
  //   else{
  //     return {};
  //   }
    
  // }
  loginuser = new FormGroup({
    email:new FormControl("",Validators.compose([Validators.required])),
    password:new FormControl("",[Validators.required,Validators.minLength(8)]),
  }); 
  submitfunction(){
    console.log(this.loginuser);
    console.log(this.em);
  }
  get em() {return this.loginuser.get('email');}
  

}
