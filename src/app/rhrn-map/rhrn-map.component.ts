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

  styles =

    [
      {
        "featureType": "road",
        "stylers": [
          {
            "hue": "#5e00ff"
          },
          {
            "saturation": -79
          }
        ]
      },
      {
        "featureType": "poi",
        "stylers": [
          {
            "saturation": -78
          },
          {
            "hue": "#6600ff"
          },
          {
            "lightness": -47
          },
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.local",
        "stylers": [
          {
            "lightness": 22
          }
        ]
      },
      {
        "featureType": "landscape",
        "stylers": [
          {
            "hue": "#6600ff"
          },
          {
            "saturation": -11
          }
        ]
      },
      {},
      {},
      {
        "featureType": "water",
        "stylers": [
          {
            "saturation": -65
          },
          {
            "hue": "#1900ff"
          },
          {
            "lightness": 8
          }
        ]
      },
      {
        "featureType": "road.local",
        "stylers": [
          {
            "weight": 1.3
          },
          {
            "lightness": 30
          }
        ]
      },
      {
        "featureType": "transit",
        "stylers": [
          {
            "visibility": "simplified"
          },
          {
            "hue": "#5e00ff"
          },
          {
            "saturation": -16
          }
        ]
      },
      {
        "featureType": "transit.line",
        "stylers": [
          {
            "saturation": -72
          }
        ]
      },
      {}
    ];

  icon = {
    url: '../assets/img/Google-Play-Music-icon.png', 
  }

  userIcon = {
    url: '../assets/img/user-headphone.png'
  }

  constructor(private _EventCatcherService: EventCatcherService) { }


  public events: any[];
  zoom: number = 12;
  latitude: number;
  longitude: number;
  // userLatitude: number;
  // userLongitude: number;
  public pos: any = {};
  public dest: any = {};
  public origin: any;
  public destination: any;
  public bidon : boolean = false;

  setPosition(position) {
    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;
    this._EventCatcherService.getArtistRhrn(this.latitude, this.longitude).subscribe(data =>
      this.events = data.resultsPage.results.event);
    console.log(position.coords);
  }

  // getUserPosition(position) {
  //   this.userLatitude = position.coords.latitude;
  //   this.userLongitude = position.coords.longitude;;
  // }

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.setPosition.bind(this));
      // navigator.geolocation.getCurrentPosition(this.getUserPosition.bind(this));
    };
    // navigator.geolocation.getCurrentPosition((pos)=>this.setPosition(pos))
  }

  goToConcert(i){
    navigator.geolocation.getCurrentPosition(this.getDirection.bind(this));
    this.dest = {
      lat : this.events[i].venue.lat,
      lng : this.events[i].venue.lng
    }
    this.bidon = true;
  }
  getDirection(position){
    this.pos = {
      lat : position.coords.latitude,
      lng : position.coords.longitude
    }
    // this.dest = {
    //   lat : this.events[i].venue,
    //   lng :
    // }
    this.origin = { lat: this.pos.lat, lng: this.pos.lng }
    this.destination = { lat: this.dest.lat, lng: this.dest.lng }
  }
}
