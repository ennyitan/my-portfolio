import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  constructor() { }
  
  getSlides(){
    return ([
      {
        bg_img: 'carousel-1',
        description : 'ADEKANLE RACHEAL',
        body : 'Solidity'
      },
      {
        bg_img: 'carousel-1',
        description : 'SOLIDITY DEVELOPER',
        body : 'Web3 js'
      }
    ])
  }
}
