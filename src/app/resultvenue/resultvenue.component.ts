import { Component, OnInit } from '@angular/core';
import { EventCatcherService } from '../services/event-catcher.service';
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
  selector: 'app-resultvenue',
  templateUrl: './resultvenue.component.html',
  styleUrls: ['./resultvenue.component.css']
})
export class ResultvenueComponent implements OnInit {
  
  public venues = [];
  public inputSearch : string;

  constructor(private _EventCatcherService: EventCatcherService, private route: ActivatedRoute, private router : Router) { }

  sendInputVenue(input, name) {
    this.router.navigate(['/listvenue', input, name]);
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) =>{
      this.inputSearch = params['value'];
      this._EventCatcherService.getVenueList(this.inputSearch)
      .subscribe(data=>
        this.venues = data.resultsPage.results.venue);

      });
  }
}
