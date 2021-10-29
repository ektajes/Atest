import { Component } from '@angular/core';
import { Profile } from './profile';
import { ProfileService } from './profile.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
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
