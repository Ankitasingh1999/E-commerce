import { Component, OnInit } from '@angular/core';
import {RegistrationService} from '../../app/service/registration.service';
import {Registration} from '../../app/model/registration';
import {FormGroup,FormControl,FormBuilder} from '@angular/forms'
import { from } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public userdata:Registration
  regform :FormGroup;

  constructor(private service:RegistrationService, private fb:FormBuilder) { }

  ngOnInit() {
    this.regform=this.fb.group({
  'name' :[''],
  'email':[''],
  'mobile':[''],
  'address':[''],
  'password':[''],
  'confirm':['']
    })
  }

  Save (Data){
    this.userdata=Data;
    this.service.registration(this.userdata).subscribe((Data)=>{
      console.log(Data);
    })
  }
}
