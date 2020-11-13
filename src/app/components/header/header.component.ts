import { Component, OnInit } from '@angular/core';
import { scrolldiv } from "../../../assets/app.js";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scroll(id) {
    scrolldiv(id);
  }

}
