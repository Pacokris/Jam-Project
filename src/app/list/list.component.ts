import { Component, OnInit } from '@angular/core';
import { EventCatcherService } from '../services/event-catcher.service';
import { ActivatedRoute, Params, } from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public events = [];
  public inputSearch : string;
  public name : string;
  public artist = {};
  public artistBioSummary : string;

constructor(private _EventCatcherService: EventCatcherService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) =>{
      this.name = params['name'];
      this.inputSearch = params['value'];
      this._EventCatcherService.getEventListCatcher(this.inputSearch)
      .subscribe(data=>
        this.events = data.resultsPage.results.event);
      this._EventCatcherService.getArtistInfoCatcher(this.name)
      .subscribe(data => {
        this.artist = data.artist
        this.bioWithoutLink(data.artist.bio.summary);
      });

    });

  }

  bioWithoutLink = param => this.artistBioSummary = param.slice(0, param.indexOf("[")).slice(0, param.indexOf("<a"));


}
