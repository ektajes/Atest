import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile';
import { ProfileService } from '../profile.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  profile!:any[];
  constructor(private prof:ProfileService, public router:Router){}
  ngOnInit(){
this.getprofiledata();
  }
  getprofiledata(){
    this.prof.getprofile().subscribe(res=>{
      this.profile=res;
    })
  }

}
