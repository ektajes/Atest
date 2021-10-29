import { Injectable } from '@angular/core';
import { Profile } from './profile';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProfileService{

  constructor(private http:HttpClient) { }

  baseUrl="http://localhost:3000/data";


  getprofile():Observable<Profile[]>{
    return this.http.get<Profile[]>(this.baseUrl);
  }
}
