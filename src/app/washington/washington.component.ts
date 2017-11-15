import { Component, OnInit } from '@angular/core';
import { LocationService } from './../location.service';

@Component({
  selector: 'app-washington',
  templateUrl: './washington.component.html',
  styleUrls: ['./washington.component.css']
})
export class WashingtonComponent implements OnInit {
    weather;
    avgTemp;
    highTemp;
    lowTemp;
    status;

   constructor(private _locationService: LocationService) { }

   ngOnInit() {
      console.log('hit')
      this._locationService.requestCity('seattle').subscribe(
          (res)=> {
              this.avgTemp = res.main.temp;
              this.highTemp = res.main.temp_max;
              this.lowTemp = res.main.temp_min;
              this.status = res.weather[0].description;
          },
          (err)=> {
              console.log('error');
          }
      );
   }



   }
