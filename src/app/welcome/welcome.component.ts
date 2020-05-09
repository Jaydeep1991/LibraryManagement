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

  constructor(public navigator:NavigatorService) { }
  
  ngOnInit(): void {
   
  }
  addBooks(){
    this.homeScreen=false;
    this.books=true;
  }
  home(){
    this.homeScreen=true;
    this.books=false;
  }

}
