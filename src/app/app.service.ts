import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  loading = true;
  isReloadAccount = new Subject<boolean>();
  titleScreen = '';
  isShowSearch = true;
  isShowBtnSearch = true;
  isReponsive = false;
  idxQues:any;
  kickMan = 0;
  kickGirl = 0;
  question = '';
  answer = '';
  constructor() {
  }
  list_question = [
    {
      id: 1,
      question: '../../../assets/image/game/1.png',
      isClick :false,
      answer:'CÓ CHÀNG TRAI VIẾT LÊN CÂY'
    },
    {
      id: 2,
      question: '../../../assets/image/game/2.png',
      isClick :false,
      answer:'TỪ THÍCH THÍCH THÀNH THƯƠNG THƯƠNG'
    },
    {
      id: 1,
      question: '../../../assets/image/game/3.png',
      isClick :false,
      answer:'HỒNG NHAN'
    },
    {
      id: 1,
      question: '../../../assets/image/game/4.png',
      isClick :false,
      answer:'THU CUỐI'
    },
    {
      id: 1,
      question: '../../../assets/image/game/5.png',
      isClick :false,
      answer:'HÃY TRAO CHO ANH'
    },
    {
      id: 1,
      question: '../../../assets/image/game/6.png',
      isClick :false,
      answer:'TÌNH YÊU KHỦNG LONG'
    },
    {
      id: 1,
      question: '../../../assets/image/game/7.png',
      isClick :false,
      answer:'ANH THANH NIÊN'
    },
    {
      id: 1,
      question: '../../../assets/image/game/8.png',
      isClick :false,
      answer:'NƠI ẤY CON TÌM VỀ'
    },
    {
      id: 1,
      question: '../../../assets/image/game/9.png',
      isClick :false,
      answer:'NÀNG THƠ'
    },
    {
      id: 1,
      question: '../../../assets/image/game/10.png',
      isClick :false,
      answer:'BÔNG HOA ĐẸP NHẤT'
    },
    {
      id: 1,
      question: '../../../assets/image/game/11.png',
      isClick :false,
      answer:'ÁNH NẮNG CỦA ANH'
    },
    {
      id: 1,
      question: '../../../assets/image/game/12.png',
      isClick :false,
      answer:'NGƯỜI HÃY QUÊN EM ĐI'
    },
    {
      id: 1,
      question: '../../../assets/image/game/13.png',
      isClick :false,
      answer:'NHIỆT HUYẾT'
    },
    {
      id: 1,
      question: '../../../assets/image/game/14.jpg',
      isClick :false,
      answer:'8-2-4-10-7'
    },
    {
      id: 1,
      question: '../../../assets/image/game/15.jpg',
      isClick :false,
      answer:'Cột thứ 2, hàng thứ 2 tính từ bên trái'
    },
    {
      id: 1,
      question: '../../../assets/image/game/16.png',
      isClick :false,
      answer:'NGHE NGÓNG'
    },
    {
      id: 1,
      question: '../../../assets/image/game/17.png',
      isClick :false,
      answer:'THON THẢ'
    },
    {
      id: 1,
      question: '../../../assets/image/game/18.png',
      isClick :false,
      answer:'LY BIA'
    },
    {
      id: 1,
      question: '../../../assets/image/game/19.png',
      isClick :false,
      answer:'THỊT CHÓ'
    },
    {
      id: 1,
      question: '../../../assets/image/game/20.png',
      isClick :false,
      answer:'CHUA CHÁT'
    },
  ]
  getInfoAccount() {
    const user: any = localStorage.getItem('user');
    return user;
  }
  getQuestion(id:any) {
    this.question = this.list_question[id].question;
   this.list_question[id].isClick = true;

  }
  getAnswer(id:any) {
    this.answer = this.list_question[id].answer;
  }
}
