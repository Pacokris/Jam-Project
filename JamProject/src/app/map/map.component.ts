import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  latitude = 45.74846;
  longitude = 4.84671;
  zoom = 15;
  onChoseLocation(event) {
    console.log(event);
  }
  constructor() { }

  ngOnInit() {
  }

}
