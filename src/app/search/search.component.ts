import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  resultParameter: string = "Artists";
  routerLinkValue: string = "/result/:value";

  constructor(private router: Router) { }

  ngOnInit() {
  }

  setToArtist() {
    this.resultParameter = "Artists";
  }

  setToLocation() {
    this.resultParameter = "Locations";
  }

  setToVenue() {
    this.resultParameter = "Venues";
  }

  goToResult(input) {
    if (this.resultParameter === "Artists") {
      this.router.navigate(['/result', input]);
      //this.routerLinkValue === "/result/:value";
    } else if (this.resultParameter === "Locations") {
      this.router.navigate(['/placeresult', input]);
      //this.routerLinkValue === "/placeresult/:value";
    } else if (this.resultParameter === "Venues") {
      this.router.navigate(['/resultvenue', input]);
      //this.routerLinkValue === "/resultvenue/:value";
  }
}
}
