import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.sass'],
  encapsulation:ViewEncapsulation.None,
})
export class PromoComponent implements OnInit, AfterViewInit {

  constructor() { }

   promoSlider () {
    var promoSlider = $('.promo-slider');

    // $(".slider").not('.slick-initialized').slick()

    if (!promoSlider.length) return;

    var status = $('.promo-slider__count');
    var	prev = $('.slider__nav--promo .slider__prev');
    var	next = $('.slider__nav--promo .slider__next');


    promoSlider.on('init afterChange', function (event:any, slick:any, currentSlide:any, nextSlide:any) {
      var i = (currentSlide ? currentSlide : 0) + 1;
      status.text(i + '/' + slick.slideCount);
    });

    promoSlider.slick({
      fade: true,
      adaptiveHeight: true,
      infinite: true,
      speed: 1200,
      prevArrow: prev,
      nextArrow: next,
      // variableWidth: true
    });

  }

  ngOnInit(): void {
    console.log($)
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log('Promo SLider')
    this.promoSlider()

  }


}
