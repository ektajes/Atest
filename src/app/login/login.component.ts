import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators, FormBuilder } from '@angular/forms';
// import { getMaxListeners } from 'process';
import { LoginService } from '../login.service';

import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform!:FormGroup;
email:any;
chk:any;
loginval:any;
password:any;
msg:any;
  constructor(private fb:FormBuilder, private log:LoginService, private router:Router) {
this.loginform=this.fb.group({
email:['', Validators.required],
password:['', Validators.required],
check:[false, Validators.requiredTrue]
})
   }
   fieldsChange(values:any):void {
    console.log(values.currentTarget.checked);
   
    this.chk=true; this.msg="by clicking , you are accepting t and c";
  }
   onSubmit(loginform:any):any

   {
this.loginval=this.loginform.value;
this.email=this.loginform.controls['email'].value;
this.password=this.loginform.controls['password'].value;
this.login(this.loginval);
   }
   login(login:any){
     
 this.log.getlogindet().subscribe(res=>{
  const user= res.find((a:any)=>{
  return a.email=== this.loginform.value.email && a.password===this.loginform.value.password
  })
  
  if(user){

    localStorage.setItem('username', 'a.email');
    alert ("login success");
    this.router.navigate(['/dashboard']);
  }
  
  else{
    alert("error occured");
  }
   })
   }

  ngOnInit(): void {
localStorage.removeItem('username');

    }
  }

