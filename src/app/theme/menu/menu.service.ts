import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  isExpand = false;
  isClickExpand = new Subject<boolean>();
  constructor() { }
  navItems = [
    {
      idx: 1,
      name:'QUESTIONS',
      router: 'home',
      icon:'memory'
    },
    {
      idx: 2,
      name:'ANSWER',
      router: 'executive',
      icon:'cast'
    }
  ];
}
