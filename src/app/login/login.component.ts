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
loginval:any;
password:any;
  constructor(private fb:FormBuilder, private log:LoginService, private router:Router) {
this.loginform=this.fb.group({
email:['', Validators.required],
password:['', Validators.required]
})
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

