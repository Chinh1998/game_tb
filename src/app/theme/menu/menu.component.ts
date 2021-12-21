import { Router } from '@angular/router';
import { AppService } from './../../app.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(public menuService:MenuService, public app: AppService, private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.checkResponsive();
      const url = this.router.url.split('/')[2];
      if(url == 'account' || url == 'users'|| url == 'card'|| url == 'credentials') {
        // this.menuService.navItems[3].open = true;
      }
    }, 100);
  }
  expand(value:any) {
    this.menuService.isExpand = value;
    this.menuService.isClickExpand.next(true);
  }
  clickRouter() {
    this.app.loading = true;
  }
  viewChild(idx:any) {
    // this.menuService.navItems[idx - 1].open = !this.menuService.navItems[idx - 1].open
  }
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkResponsive();
  }

  checkResponsive() {
    const width = document.body.clientWidth;
    if(width < 720) {
      this.menuService.isExpand = true;
      this.app.isReponsive = true;
    } else {
      this.menuService.isExpand = false;
      this.app.isReponsive = false;
    }
  }
}
