import { Component, OnInit, ViewChild } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/database';
import { DataService } from './data-service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('entryForm') entryForm: AppComponent;

  constructor(private dataService: DataService) {}

  dataArr = [];
  value: any;

  ngOnInit() {
    this.addData();
    // this.fetchData();
  }

  fetchData() {
    this.dataService.fetchData().subscribe(data => {
      this.dataArr.push(data);
      console.log(this.dataArr);

      let a = this.dataArr[0].concat(this.dataArr[1]);

      console.log(a);

    })
  }

  addData() {
    let Y = this.entryForm.value.geoHeight;
    let X = this.entryForm.value.geoWidth;
    let eventName = this.entryForm.value.event;
    let I = 0;

    if (this.entryForm.value.land == "Woj1") {
      I = (Y*50) * 4550 + (X*50);
      console.log(I);
    } else if (this.entryForm.value.land == "Woj2") {
      I = (Y*50) * 3350 + (X*50);
      console.log(I);
    } else if (this.entryForm.value.land == "Woj3") {
      I = (Y*50) * 4900 + (X*50);
      console.log(I);
    }

    console.log(eventName);

    let b = this.dataService.addData(I, X, Y, eventName);
    console.log(b);
  }
}
