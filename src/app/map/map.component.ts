import { Component, OnInit } from '@angular/core';
import { EventCatcherService } from '../services/event-catcher.service';
import { ActivatedRoute, Params, Router } from "@angular/router";


@Component({
	selector: 'app-map',
	templateUrl: './map.component.html',
	styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

	zoom: number;
	latitude: number;
	longitude: number;

	public events = [];
	public inputSearch: string;

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

	constructor(private _EventCatcherService: EventCatcherService, private route: ActivatedRoute, private router: Router) { }

	ngOnInit() {
		this.route.params.subscribe((params: Params) => {
			this.inputSearch = params['value'];
			this._EventCatcherService.getEventListCatcher(this.inputSearch)
				.subscribe(data =>
					this.events = data.resultsPage.results.event);
		});

	}

	sendInputList(input, name) {
		this.router.navigate(['/list', input, name]);
	}

	getLatitude() {
		let maxLat = this.events[0].venue.lat;
		let minLat = this.events[0].venue.lat;
		for (let i = 1; i < this.events.length; i++) {
			if (this.events[i].venue.lat >= maxLat && this.events[i].venue.lat != null) {
				maxLat = this.events[i].venue.lat;
			}
			if (this.events[i].venue.lat <= minLat && this.events[i].venue.lat != null) {
				minLat = this.events[i].venue.lat;
			}
		}
		//   console.log("lat max " + maxLat + "lat min " + minLat + "lat moyenne"+(maxLat-minLat));
		//   console.log(this.events)

		return this.latitude = (maxLat + minLat) / 2;
	};

	getLongitude() {
		let maxLng = this.events[0].venue.lng;
		let minLng = this.events[0].venue.lng;
		for (let i = 1; i < this.events.length; i++) {
			if (this.events[i].venue.lng > maxLng && this.events[i].venue.lat != null) {
				maxLng = this.events[i].venue.lng;
			}
			if (this.events[i].venue.lng < minLng && this.events[i].venue.lat != null) {
				minLng = this.events[i].venue.lng;
			}
		}
		//   console.log("max lgn" + maxLng + "min lgn" + minLng + "lgt"+(maxLng+Math.abs(minLng)));

		return this.longitude = (maxLng + minLng) / 2;
	};

	getZoom() {
		let maxLng = this.events[0].venue.lng;
		let minLng = this.events[0].venue.lng;
		for (let i = 1; i < this.events.length; i++) {
			if (this.events[i].venue.lng > maxLng) {
				maxLng = this.events[i].venue.lng;
			}
			if (this.events[i].venue.lng < minLng) {
				minLng = this.events[i].venue.lng;
			}
		}
		let x = 0;
		if (minLng >= 0) {
			x = maxLng - minLng;
		}
		else { x = maxLng + Math.abs(minLng); }
		if (x <= 3) { return this.zoom = 6; }
		if (x < 21 && x > 3) { return this.zoom = 5; }
		if (x < 60 && x >= 21) { return this.zoom = 4; }
		if (x < 150 && x >= 60) { return this.zoom = 3; }
		if (x >= 150) { return this.zoom = 2; }
	}
}