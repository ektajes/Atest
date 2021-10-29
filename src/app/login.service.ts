import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { 
    
  }

  baseUrl="http://localhost:3000/login";

  getlogindet():Observable<any>{
    return this.http.get<any>(this.baseUrl);
  }
}
