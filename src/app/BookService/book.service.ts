import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export class getBookId{
  constructor(public statusCode:number,public registrationNumber:number,public message:string){}
}
export class data{
  constructor(public id:number,public bookgener:string){}
}
export class bookType{
  constructor(public statusCode:number,public message:string,public data:Array<data>){}
}

@Injectable({
  providedIn: 'root'
})

export class BookService {

  constructor(private http:HttpClient) { }
   
    getBookRegistrationNumber(){
      return this.http.get<getBookId>(`${environment.url}/api/books/getBookId`);
    }

    getListOfBookType(){
      return this.http.get<bookType>(`${environment.url}/api/books/showAllBookType`);
    }
  
  
}
