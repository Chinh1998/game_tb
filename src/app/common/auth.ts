import { AppService } from './../app.service';
import { Observable } from 'rxjs';
import { LoginService } from './../views/login/login.service';
import {Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private loginService: LoginService,
    private app: AppService
    // tslint:disable-next-line:ban-types
  ) {}

  // @ts-ignore
  async canActivate(): Observable<boolean> | boolean {
    let status;
    this.app.loading = true; 
    await this.loginService.checkAuth().toPromise().then(res => {
      console.log(res);
      
      if (res) {
        status = 200;
      } else {
        this.router.navigate(['/login']);
      }
    }, (err) => {
      this.router.navigate(['/login']);
      localStorage.removeItem('user');
      return false;
    })
    if (status == 200) {
      return true;
    } else {
      return false;
    }
  }
}
