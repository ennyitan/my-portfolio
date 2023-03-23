import { Component, OnInit } from '@angular/core';
import { Slide } from 'src/app/interface/slide';
import { CarouselService } from 'src/app/services/carousel.service';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss']
})
export class SlidesComponent implements OnInit {
  slides: Slide[] = []
  selectedSlide: number = 0
  constructor(private _slidesCarousel: CarouselService) { }

  ngOnInit(): void {
    this.slides = this._slidesCarousel.getSlides()

    setInterval(() => {
      this.selectedSlide++
      if(this.selectedSlide > this.slides.length-1){
        this.selectedSlide = 0;
      }
    }, 3000)
  }

}
