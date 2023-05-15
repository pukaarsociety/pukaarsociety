import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.sass'],
  encapsulation:ViewEncapsulation.None
})
export class MainMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
