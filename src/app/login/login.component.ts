import { Component, OnInit } from '@angular/core';
import { LoginService } from '../loginService/login.service';
import { Router } from '@angular/router';
import { ToasterService } from '../toasterService/toaster.service';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide=true;
  login:FormGroup;
  name:string;
  role:string;

  constructor(private LoginService: LoginService, private route: Router, private toasterService: ToasterService) { }

  ngOnInit(): void {
    this.login=new FormGroup({
      "userNameEmail":new FormControl(),
      "password":new FormControl()
    })
  }

  submit(){
    this.LoginService.loginRequest(this.login.value).subscribe(
      resp=>{
        if(resp.statusCode === 200){
          this.name = resp.name;
          this.role = resp.role;
          sessionStorage.setItem('authenticate', this.name);
          sessionStorage.setItem('role', this.role);
          this.route.navigate(['welcome']);
        }
        if(resp.statusCode === 400){
          this.toasterService.Error(resp.message);
        }
        if(resp.statusCode === 404){
          this.toasterService.Error(resp.message);
        }
      },
      err =>{
        this.toasterService.Error('Server Error, please try again later');
      }
    )
  }


}
