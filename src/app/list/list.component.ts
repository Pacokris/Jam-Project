import { Component, OnInit } from '@angular/core';
import { EventCatcherService } from '../services/event-catcher.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public events = [];

  constructor(private _EventCatcherService: EventCatcherService) { }

  ngOnInit() {
    this._EventCatcherService.getEventListCatcher()
        .subscribe(data=> {
          this.events = data.resultsPage.results.event;
        })
  }

}
