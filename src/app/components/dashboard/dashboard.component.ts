import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../../../assets/canvasjs.min.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  step = 0;
  step2 = 0;
  contacts = [{ name: "abrsh", index: 0, content: "I need it one of them.", phone: "+251983271884", email: "abrshaschalew@gmail.com" },
  { name: "Yero", index: 1, content: "I need it one of them.", phone: "+251983271884", email: "yerotad@gmail.com" }];
  jobs =  [{ name: "Milki", index: 0,  phone: "+251983271884", email: "milkialemu@gmail.com" },
  { name: "Yabso", index: 1, phone: "+251983271884", email: "yabsoabrsh@gmail.com" }];
  constructor() { }


  evetnListner(event) {
    if (event.tab.textLabel == "Trafic") {
      this.trafic();
    }
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  setStep2(index: number) {
    this.step2 = index;
  }

  nextStep2() {
    this.step2++;
  }

  prevStep2() {
    this.step2--;
  }


  trafic() {
    var chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      title: {
        text: "Site Trafic"
      },
      axisY: {
        title: "Trafic",
        valueFormatString: "#0,,.",
        suffix: "mn",
        prefix: ""
      },
      data: [{
        type: "splineArea",
        color: "rgba(54,158,173,.7)",
        markerSize: 5,
        xValueFormatString: "YYYY",
        xValueType: "text",
        dataPoints: [
          { x: new Date(2000, 2), y: 3289000 },
          { x: new Date(2001, 0), y: 3830000 },
          { x: new Date(2002, 0), y: 2009000 },
          { x: new Date(2003, 0), y: 2840000 },
          { x: new Date(2004, 3), y: 2396000 },
          { x: new Date(2005, 0), y: 1613000 },
          { x: new Date(2006, 7), y: 2821000 },
          { x: new Date(2007, 0), y: 2000000 },
          { x: new Date(2008, 1), y: 1397000 },
          { x: new Date(2009, 0), y: 2506000 },
          { x: new Date(2010, 0), y: 2798000 },
          { x: new Date(2011, 0), y: 3386000 },
          { x: new Date(2012, 0), y: 6704000 },
          { x: new Date(2013, 0), y: 6026000 },
          { x: new Date(2014, 0), y: 2394000 },
          { x: new Date(2015, 0), y: 1872000 },
          { x: new Date(2016, 0), y: 2140000 }
        ]
      }]
    });
    chart.render();
  }

  ngOnInit(): void {

    setTimeout(() => {
      this.trafic();
    }, 3000);

  }

}
