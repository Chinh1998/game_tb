import { Router } from '@angular/router';
import { AppService } from './../../app.service';
import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  user: any;
  idx:any;
  audio = new Audio('../../../assets/sound/Am-thanh-sut-vao-da-bong-www_tiengdong_com.mp3');
  audio1 = new Audio('../../../assets/sound/Tieng-thoi-coi-nhac-nho-www_tiengdong_com.mp3');
  isShow = false;
  constructor(public app: AppService, 
    private router: Router) { }

  ngOnInit(): void {
    AOS.init({
      duration: 1000,
      delay: 100,
    });
   setTimeout(() => {
     this.app.loading = false;
   }, 500);
  }

  hoverItem(idx:any) {
    this.idx=idx;
  }
  darkmode() {
  }
  answer() {
    this.app.getAnswer(this.app.idxQues);
    this.isShow = true;
    
  }
  showCard= false;
  idxCard = 0;
  card(id:any) {
    this.idxCard = id;
    this.showCard= true;
    this.audio1.play();
    setTimeout(() => {
      this.showCard= false;
    }, 3000);
  }
  routerQuestion() {
    this.router.navigate(['football'])
  }
  index = 0;
  goal(idx:any) {
    this.index = idx;
    if(idx == 1) {
      this.audio.play();
      this.app.kickGirl = this.app.kickGirl + 1;
    } else {
      if(idx == 2) {
        this.audio.play();
        this.app.kickMan = this.app.kickMan + 1;
      }
    }
  }
}
