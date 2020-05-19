import { Component, OnInit } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { NavigatorService } from '../Navigatorservice/navigator.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  
  books:boolean=false;
  homeScreen:boolean=true;
  shBook:boolean=false;

  constructor(public navigator:NavigatorService) { }
  
  ngOnInit(): void {
   
  }
  addBooks(){
    this.homeScreen=false;
    this.books=true;
    this.shBook=false;
  }
  home(){
    this.homeScreen=true;
    this.books=false;
    this.shBook=false;
  }
  showBooks(){
    this.homeScreen=false;
    this.books=false;
    this.shBook=true;
  }

}
