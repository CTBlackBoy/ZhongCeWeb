import {Component, Injectable, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {UserRegister} from "../user.register";

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'user-register',
  templateUrl: './User-register.component.html',
  styleUrls: ['./User-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  auther = ""
  password = ""
  email = ""

  constructor(
    public adminRegister:UserRegister
  ) { }



  UserAdd() {
    this.adminRegister.postRegister(this.auther,this.email,this.password)
  }

  ngOnInit(): void {
    // this.adminRegister.getRegister().subscribe(res => {
    //   console.log('ssssss');
    // })
  }

}

