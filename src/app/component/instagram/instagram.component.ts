import { AfterViewInit, Component, OnInit, ViewEncapsulation } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.sass'],
  encapsulation:ViewEncapsulation.None
})
export class InstagramComponent implements OnInit, AfterViewInit {
  constructor() {}

  instagramSlider() {
    var instagramSlider = $('.instagram-slider');

    if (!instagramSlider.length) return;

    var prev = $('.instagram-slider__nav .slider__prev');
    var next = $('.instagram-slider__nav .slider__next');

    instagramSlider.slick({
      prevArrow: prev,
      nextArrow: next,
      slidesToShow: 6,
      responsive: [
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 5,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    });
  }



  ngOnInit(): void {}
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log("Instagram SLider Open ")
    this.instagramSlider();

  }
}
