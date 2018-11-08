import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventCatcherService } from "../services/event-catcher.service";



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  resultParameter: string = "Artists";
  routerLinkValue: string = "/result/:value";
  public checkedArtist: boolean = this.service.checkedArtist;
  public checkedLocation: boolean = this.service.checkedLocation;
  public checkedVenue: boolean = this.service.checkedVenue;

  public placeholderValue: string = this.service.placeholderValue;
  public searchValue:string = '';



  constructor(private router: Router, private service: EventCatcherService) {}

  ngOnInit() {}


  setToArtist() {
    this.service.setToArtist();
    this.placeholderValue  = "Search your artist";
    this.checkedArtist = this.service.checkedArtist;
  }

  setToLocation() {
    this.service.setToLocation();
    this.placeholderValue  = "Search your location";
    this.checkedLocation = this.service.checkedLocation;
    
  }

  setToVenue() {
    this.service.setToVenue();
    this.placeholderValue  = "Search your venue";
    this.checkedVenue = this.service.checkedVenue;


  }

  goToResult(input) {
    if (this.resultParameter === "Artists") {
      this.router.navigate(['/result', input]);
      //this.routerLinkValue === "/result/:value";
    } 
    else if (this.resultParameter === "Locations") {
      this.router.navigate(['/placeresult', input]);
      //this.routerLinkValue === "/placeresult/:value";
    } 
    else if (this.resultParameter === "Venues") {
      this.router.navigate(['/resultvenue', input]);
      //this.routerLinkValue === "/resultvenue/:value";
  }
}
}
