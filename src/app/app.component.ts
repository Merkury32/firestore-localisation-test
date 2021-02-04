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
  @ViewChild('entryForm2') entryForm2: AppComponent;

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

  readData() {
    let Y = this.entryForm2.value.geoHeight;
    let X = this.entryForm2.value.geoWidth;
    let I = 0;
    let I_prawy = 0;
    let I_lewy = 0;
    let I_gorny = 0;
    let I_dolny = 0;
    let I_prawy_gorny = 0;
    let I_prawy_dolny = 0;
    let I_lewy_gorny = 0;
    let I_lewy_dolny = 0;


    if (this.entryForm2.value.land == "Woj1") {
      I = (Y*50) * 4550 + (X*50);
      I_prawy = I + 1;
      I_lewy = I - 1;
      I_gorny = I + 4550;
      I_dolny = I - 4550;
      I_prawy_gorny = I + 4550 + 1;
      I_prawy_dolny = I - 4550 + 1;
      I_lewy_gorny = I + 4550 - 1;
      I_lewy_dolny = I - 4550 - 1;
    } else if (this.entryForm2.value.land == "Woj2") {
      I = (Y*50) * 3350 + (X*50);
      I_prawy = I + 1;
      I_lewy = I - 1;
      I_gorny = I + 3350;
      I_dolny = I - 3350;
      I_prawy_gorny = I + 3350 + 1;
      I_prawy_dolny = I - 3350 + 1;
      I_lewy_gorny = I + 3350 - 1;
      I_lewy_dolny = I - 3350 - 1;
    } else if (this.entryForm2.value.land == "Woj3") {
      I = (Y*50) * 4900 + (X*50);
      I_prawy = I + 1;
      I_lewy = I - 1;
      I_gorny = I + 4900;
      I_dolny = I - 4900;
      I_prawy_gorny = I + 4900 + 1;
      I_prawy_dolny = I - 4900 + 1;
      I_lewy_gorny = I + 4900 - 1;
      I_lewy_dolny = I - 4900 - 1;
    }
  }
}
