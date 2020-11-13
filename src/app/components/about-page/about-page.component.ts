import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {
  isLoad = true;
  url;
  y: Object = [1,2,3,4];
  constructor() {
    let url = window.location.href;
    url = url.replace('/about','');
    this.url = url;
  }

  ngOnInit(): void {
  }

}
