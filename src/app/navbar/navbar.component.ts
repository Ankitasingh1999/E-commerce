import { Component, OnInit } from '@angular/core';
import {LoginService} from '../service/login.service';
import {Login} from '../model//login';
import {FormGroup,FormControl,FormBuilder} from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public udata :Login
  logform :FormGroup;

  constructor(private service :LoginService, private fb:FormBuilder) { }

  ngOnInit() {
    this.logform = this.fb.group({
      'email' :[''],
      'password' :[''],
      'name' :['']
    })
  }

  Save(Data){
    this.udata = Data;
    this.service.login(this.udata).subscribe((Data)=>{
      console.log(Data);
    })
  }
}
