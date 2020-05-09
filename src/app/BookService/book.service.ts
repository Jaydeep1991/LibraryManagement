import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export class getBookId{
  constructor(public statusCode:number,public registrationNumber:number,public message:string){}
}

@Injectable({
  providedIn: 'root'
})

export class BookService {

  constructor(private http:HttpClient) { }
   
    getBookRegistrationNumber(){
      return this.http.get<getBookId>(`${environment.url}/api/books/getBookId`);
    }
  
  
}
