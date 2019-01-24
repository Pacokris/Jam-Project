import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventCatcherService } from '../services/event-catcher.service';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  resultParameter: string;
  routerLinkValue = '/result/:value';
  public checkedArtist: boolean = this.service.checkedArtist;
  public checkedLocation: boolean = this.service.checkedLocation;
  public checkedVenue: boolean = this.service.checkedVenue;

  public placeholderValue: string = this.service.placeholderValue;
  public searchValue = '';



  constructor(private router: Router, private service: EventCatcherService) { }

  ngOnInit() { }


  /* Gère les filtres de recherches */
  setToArtist() {
    this.service.setToArtist();
    this.placeholderValue = 'Search your artist';
    this.checkedArtist = this.service.checkedArtist;
  }

  setToLocation() {
    this.service.setToLocation();
    this.placeholderValue = 'Search your location';
    this.checkedLocation = this.service.checkedLocation;

  }

  setToVenue() {
    this.service.setToVenue();
    this.placeholderValue = 'Search your venue';
    this.checkedVenue = this.service.checkedVenue;


  }

  /* Redirections vers les composants de recherche */
  goToResult(input) {
    if (this.service.resultParameter === 'Artists') {
      this.searchValue = '';
      this.router.navigate(['/result', input]);

    } else if (this.service.resultParameter === 'Locations') {
      this.searchValue = '';
      this.router.navigate(['/placeresult', input]);

    } else if (this.service.resultParameter === 'Venues') {
      this.searchValue = '';
      this.router.navigate(['/resultvenue', input]);

    }
  }
}
