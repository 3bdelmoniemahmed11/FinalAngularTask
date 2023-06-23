import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  i: number = -1;
  imgSrc: string = "1.jpg";
  imgList: string[] = ["1.jpg", "2.jpg", "3.jpg"];
  next()
  {
    if (this.i == this.imgList.length - 1) this.i = -1;
    this.i++;
    this.imgSrc= this.imgList[this.i];

     
  }
}
