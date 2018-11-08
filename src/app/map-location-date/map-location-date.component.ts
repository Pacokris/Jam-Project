import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { EventCatcherService } from '../services/event-catcher.service';

@Component({
  selector: 'app-map-location-date',
  templateUrl: './map-location-date.component.html',
  styleUrls: ['./map-location-date.component.css']
})
export class MapLocationDateComponent implements OnInit {

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

constructor(private route: ActivatedRoute, private service: EventCatcherService, private router: Router) { }


zoom: number = 16;
latitude: number;
longitude: number;
public detailConcert =[];
public dateDebut;
public dateFin;

retourList(){
  this.router.navigate(['placedateresult', this.dateDebut, this.dateFin, this.detailConcert[0].venue.metroArea.id, this.detailConcert[0].location.city,false ])
}

ngOnInit() {
  this.route.params.subscribe(
    (params: Params) => {
      this.latitude = parseFloat(params['lat']);
      this.longitude = parseFloat(params['lng']);
      this.dateDebut = (params['dateDebut']);
      this.dateFin = (params['dateFin']);
    }
  );

  console.log(this.longitude, this.latitude);
  console.log(this.service.detailsConcert)

  this.detailConcert = this.service.detailsConcert;
  console.log(this.detailConcert[0])
}


}



