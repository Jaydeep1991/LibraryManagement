import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigatorService {


  opened:boolean=false;
  constructor() { }

  sidevav(){
    this.opened=true;
  }
  close(){
    this.opened=false;
  }
}
