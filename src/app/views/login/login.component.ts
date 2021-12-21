import { AppService } from './../../app.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  err = {
    mail: '',
    password: ''
  }
  isErr = false;
  returnUrl = '';
  data = {
    mail: '',
    password: ''
  }
  constructor(private login: LoginService, private router: Router,
    private activatedRoute: ActivatedRoute, private app: AppService
  ) { }

  ngOnInit(): void {
    this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl || '';
    this.login.checkAuth().subscribe((respon) => {
      if (respon) {
        this.router.navigate(['/football']);
        return;
      }
    }, err => {
      this.app.loading = false;
    })

    setTimeout(() => {
      this.app.loading = false;
    }, 600);
  }
  
  checkEmail() {
    this.err.mail = '';
    if (!this.data.mail) {
      this.err.mail = "Please input your mail!";
      this.isErr = true;
    }
  }
  checkPassword() {
    this.err.password = '';
    if (!this.data.password) {
      this.err.password = "Please input your password!";
      this.isErr = true;
    }
  }
  validateAll() {
    this.isErr = false;
    this.checkEmail();
    this.checkPassword();
  }

  logIn() {
    this.validateAll();
    if (this.isErr) {
      return;
    }
    this.app.loading = true;
    if(this.data.mail == 'thanhbinh@gmail.com' && this.data.password == 'TB@12345') {
      localStorage.setItem('account', JSON.stringify(this.data));
      this.router.navigate([this.returnUrl]);
    }
  }
}
