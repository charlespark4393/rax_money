import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styles: ["./landing-page.component.css",
    "../../../src/styles.scss"]
})

export class LandingPageComponent implements OnInit {

  title = 'landing-page';

  constructor() { }

  ngOnInit() {

    $(document).ready(function () {

      const $DOM = {
        gallery: $(".landing__gallery"),
        confirmation: $(".landing__confirmation"),
        error: $(".landing__error"),
        form: $(".landing__form"),
        input: $(".landing__form input")
      }

      $DOM.gallery.slick({
        mobileFirst: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        dots: false,
        arrows: false,
        swipe: true,
        autoplay: true,
        autoplaySpeed: 3000
      });

    });
  }
}