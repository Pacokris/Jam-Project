import { Component, OnInit } from '@angular/core';
import { EventCatcherService } from '../services/event-catcher.service';

@Component({
	selector: 'app-map',
	templateUrl: './map.component.html',
	styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

	latitude = 46.74846;
	longitude = 3.84671;
	zoom = 5;

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
	public events = [];

	constructor(private _EventCatcherService: EventCatcherService) { }

	ngOnInit() {
		this._EventCatcherService.getEventListCatcher()
			.subscribe(data=> {
			  this.events = data.resultsPage.results.event;
			})
	  }

}
