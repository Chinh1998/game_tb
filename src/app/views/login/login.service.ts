import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }


  checkAuth() {
    const token = this.getToken();
    return of(token);
  }

  getToken() {
    const user =localStorage.getItem('account');
    if(user) {
      let token = JSON.parse(user);
      return token;
    }
  }
}
