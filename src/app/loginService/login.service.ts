import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


export class userloginResponse {
  constructor(public statusCode: number, public name: string, public role: string, public message: string) { }
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  url: string;

  loginRequest(data) {
    return this.http.post<userloginResponse>(`${environment.url}/api/auth/signin`, data);
  }

  isLoggedIn(){
    let user=sessionStorage.getItem('authenticate');
    if(user==null){
      return false;
    }return true;
  }
}
