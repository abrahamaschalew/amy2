import { Component, OnInit } from '@angular/core';
import { scrolldiv } from "../../../assets/app.js";

@Component({
  selector: 'app-fotter',
  templateUrl: './fotter.component.html',
  styleUrls: ['./fotter.component.css']
})
export class FotterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scroll(id) {
    scrolldiv(id);
  }

}
