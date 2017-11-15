import { Component, OnInit } from '@angular/core';
import { LocationService } from './../location.service';

@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})
export class SanjoseComponent implements OnInit {

    weather;
    avgTemp;
    highTemp;
    lowTemp;
    status;

   constructor(private _locationService: LocationService) { }

   ngOnInit() {
      console.log('hit')
      this._locationService.requestCity('san+jose').subscribe(
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
