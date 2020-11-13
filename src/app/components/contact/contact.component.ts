import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  isLoad = false;
  constructor() { }

  ngOnInit(): void {
  }

  onContact(form: NgForm) {
    if (form.invalid) return;
    this.isLoad = true;
  }

}
