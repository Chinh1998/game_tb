import { Router } from '@angular/router';
import { AppService } from './../../app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-launcher',
  templateUrl: './launcher.component.html',
  styleUrls: ['./launcher.component.scss']
})
export class LauncherComponent implements OnInit {
  audio = new Audio('../../../assets/sound/ChampionLeague.mp3');
  audio1 = new Audio('../../../assets/sound/Dong-ho-dem-nguoc-30-giay-www_nhacchuongvui_com.mp3');
  constructor(public app: AppService, private router: Router) { app.titleScreen = 'Dashboard'}

  ngOnInit(): void {
    this.app.isShowBtnSearch = false;
    setTimeout(() => {
      this.app.loading = false;
    }, 500);
  }
  routerAn(id:any) {
    this.app.idxQues = id;
    this.app.getQuestion(id);
    this.router.navigate(['goal']);
    this.audio1.play();
  }
  music() {
    this.audio.play();
  }
}
