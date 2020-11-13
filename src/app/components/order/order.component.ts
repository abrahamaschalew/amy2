import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  isLoad = false;
  constructor() {
  }

  ngOnInit(): void {
  }

  onOrder(form: NgForm) {
    if (form.invalid) return;
    this.isLoad = true;
  }

}
