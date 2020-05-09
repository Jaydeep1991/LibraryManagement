import { Component, OnInit } from '@angular/core';
import { LoginService } from '../loginService/login.service';
import { Router } from '@angular/router';
import { ToasterService } from '../toasterService/toaster.service';

export class userLoginRequest {
  constructor(public userNameEmail: string, public password: string) { }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private LoginService: LoginService, private route: Router, private toasterService: ToasterService) { }

  hide = true;
  email: string = '';
  password: string = '';
  data = new userLoginRequest('', '');
  name: string = '';
  role: string = '';
  errorMessage: string = '';
  emptyMessage:string='';

  ngOnInit(): void {
  }


  userLoginRequest() {
    this.data.userNameEmail = this.email;
    this.data.password = this.password;
    if(this.email==='' || this.password===''){
      this.fieldEmpty();
    }else{
    this.LoginService.loginRequest(this.data).subscribe(
      resp => {
        if (resp.statusCode === 200) {
          this.isSuccessfull(resp)
        } else if (resp.statusCode === 400) {
          this.isfailed(resp);
        }
      },
      err => {
        this.isfatal(err)
      }
    );}
  }

  isSuccessfull(resp) {
    this.name = resp.name;
    this.role = resp.role;
    sessionStorage.setItem('authenticate', this.name);
    sessionStorage.setItem('role', this.role);
    this.route.navigate(['welcome']);
    // this.toasterService.Success("Successfully logged in");
  }

  isfailed(resp) {
    this.errorMessage = resp.message;
    this.toasterService.Error("Wrong username or Password");
    
  }
  isfatal(err) {
    this.errorMessage = err.message;
    this.toasterService.Error("Something went wrong");
  }
  fieldEmpty(){
    this.emptyMessage='Field cannot be empty';
    this.toasterService.Warning('Field cannot be empty');
  }

}
