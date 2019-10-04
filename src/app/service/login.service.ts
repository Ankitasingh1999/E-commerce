import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Login} from '../../app/model/login';
import {FormBuilder} from '@angular/forms';
  import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginURL :string ='http://localhost:3001/api/auth/adduser';
  headers :HttpHeaders;

  constructor(private http:HttpClient,private formbuilder:FormBuilder) { 
    this.headers = new HttpHeaders(
      {
        'Content-Type' : 'application/json'
      }
    )
  }

  login(udata){
return this.http.post<Login>(this.loginURL,udata,{
  headers:this.headers
})
  }
}
