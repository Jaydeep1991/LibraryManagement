import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../loginService/login.service';
import { NavigatorService } from '../Navigatorservice/navigator.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  name: string = '';
  role: string = '';

  opened:boolean=false;


  constructor(private route: Router, public loginService: LoginService,public navigateService:NavigatorService) { }
  ngOnInit(): void {
    let user = sessionStorage.getItem('authenticate');
    this.name = user;
    let role = sessionStorage.getItem('role');
    this.role = role;
  }

  login() {
    this.route.navigate(['login']);
  }

  logout() {
    this.route.navigate(['logout']);
  }


}
