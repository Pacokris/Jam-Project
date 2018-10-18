import { Component, OnInit } from '@angular/core';
import { EventCatcherService } from '../services/event-catcher.service';
import { ActivatedRoute, Params } from "@angular/router"; 


@Component({
  selector: 'app-placelist',
  templateUrl: './placelist.component.html',
  styleUrls: ['./placelist.component.css']
})
export class PlacelistComponent implements OnInit {

  public places = [];
  public inputSearch : string;

  constructor(private _EventCatcherService: EventCatcherService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) =>{
      this.inputSearch = params['value'];
      this._EventCatcherService.getAreaEvent(this.inputSearch)
      .subscribe(data=> 
        this.places = data.resultsPage.results.event);
      });
    }

}