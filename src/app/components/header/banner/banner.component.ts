import { Component, OnInit } from '@angular/core';
import { scrolldiv } from "../../../../assets/app.js";


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  isPc = true;

  constructor() {
    if ( screen.width < 500)
      this.isPc = false;
  }

  ngOnInit(): void {
  }

  scroll(id) {
    scrolldiv(id);
  }

}
