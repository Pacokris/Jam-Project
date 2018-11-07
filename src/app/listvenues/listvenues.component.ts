import { Component, OnInit, HostListener } from '@angular/core';
import { EventCatcherService } from '../services/event-catcher.service';
import { ActivatedRoute, Router, Params, } from "@angular/router";

@Component({
  selector: 'app-listvenues',
  templateUrl: './listvenues.component.html',
  styleUrls: ['./listvenues.component.css']
})
export class ListvenuesComponent implements OnInit {

  public concerts = [];
  public venueInfo = {};
  public inputSearch: string;
  public name : string;

  constructor(private _EventCatcherService: EventCatcherService, private route: ActivatedRoute, private router : Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) =>{
      this.name = params['name'];
      this.inputSearch = params['value'];
      this._EventCatcherService.getVenueConcert(this.inputSearch)
      .subscribe((data)=>
      {this.concerts = data.resultsPage.results.event;
      })
      this._EventCatcherService.getVenueInfo(this.inputSearch)
      .subscribe(data => {
        this.venueInfo = data.resultsPage.results
        console.log(this.venueInfo.displayName)
      });
    })
  }

}
