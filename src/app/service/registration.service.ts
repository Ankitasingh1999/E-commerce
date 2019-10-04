import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Registration} from '../../app/model/registration';
import {FormBuilder} from'@angular/forms';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  registerurl: string ='http://localhost:3001/api/auth/adduser';
  headers:HttpHeaders;

  constructor(private http:HttpClient,private formbuilder:FormBuilder) { 
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  registration(userdata){
    return this.http.post<Registration>(this.registerurl,userdata,{
headers:this.headers
    })
  }
}
