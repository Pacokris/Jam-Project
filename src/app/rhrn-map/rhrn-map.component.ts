import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventCatcherService } from '../services/event-catcher.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-rhrn-map',
  templateUrl: './rhrn-map.component.html',
  styleUrls: ['./rhrn-map.component.css']
})
export class RhrnMapComponent implements OnInit {

  constructor(private _EventCatcherService: EventCatcherService) { }


  location = {};
  public events: any [];
  zoom : number = 12;
	latitude: number;
	longitude: number;

  setPosition(position) {
     this.location = position.coords;
     this.latitude = this.location.latitude;
     this.longitude = this.location.longitude;
     console.log(position.coords);
  }

  ngOnInit() {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(this.setPosition.bind(this));
      };
      // navigator.geolocation.getCurrentPosition((pos)=>this.setPosition(pos))
    
    this._EventCatcherService.getArtistRhrn(45.74, 4.84).subscribe(data => 
          this.events = data.resultsPage.results.event);
    
        
  }

}
