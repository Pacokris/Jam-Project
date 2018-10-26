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
  sendInputResult(input) {
    this.router.navigate(['/result', input]);
  }

  sendInputLocation(input) {
    this.router.navigate(['/placeresult', input]);
  }

  setToArtist() {
    this.resultParameter = "Artists";
  }

  setToLocation() {
    this.resultParameter = "Locations";
  }

  goToResult(input) {
    if (this.resultParameter === "Artists") {
      this.router.navigate(['/result', input]);
      this.routerLinkValue === "/result/:value";
    } else if (this.resultParameter === "Locations") {
      this.router.navigate(['/placeresult', input]);
      this.routerLinkValue === "/placeresult/:value";
    }
  }
}
