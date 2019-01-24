import { Component, OnInit, HostListener } from '@angular/core';
import { EventCatcherService } from '../services/event-catcher.service';
import { ActivatedRoute, Router, Params, } from '@angular/router';

@Component({
  selector: 'app-listvenues',
  templateUrl: './listvenues.component.html',
  styleUrls: ['./listvenues.component.css']
})
export class ListvenuesComponent implements OnInit {

  public concerts = [];
  public venueInfo = {};
  public inputSearch: string;
  public name: string;
  public screenHeight: number;
  public screenWidth: number;

  constructor(private _EventCatcherService: EventCatcherService, private route: ActivatedRoute, private router: Router) { this.onResize(); }

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    console.log(this.screenHeight, this.screenWidth);
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.name = params['name'];
      this.inputSearch = params['value'];
      this._EventCatcherService.getVenueConcert(this.inputSearch)
        .subscribe((data) => {
        this.concerts = data.resultsPage.results.event;
        });
      this._EventCatcherService.getVenueInfo(this.inputSearch)
        .subscribe(data => {
          this.venueInfo = data.resultsPage.results.venue;
          console.log(this.concerts);
        });
    });
  }

}
