import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export class BookGenere{
  constructor(public bookCount:number,public bookGenere:string){}
}

export class DashboardResponse{
  constructor(public statusCode:number,public message:string,public data:Array<BookGenere>){}
}

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http:HttpClient) { }

  getBookGenere(){
    return this.http.get<DashboardResponse>(`${environment.url}/api/bookForGenere`);
  }
}
