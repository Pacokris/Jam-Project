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

	markers = [
		{
			lat: 45.743858,
			lng: 4.84871,
			label: 'A',
		},
		{
			lat: 45.746858,
			lng: 4.84671,
			label: 'B',
		},
		{
			lat: 45.749858,
			lng: 4.84371,
			label: 'C',
		}
	]

	constructor() { }

	ngOnInit() {
	}

}
