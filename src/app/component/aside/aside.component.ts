import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'aside-component',
  templateUrl: './aside.component.html',
  styleUrls:['./aside.component.sass'],
  encapsulation:ViewEncapsulation.None,


})

export class AsideComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
