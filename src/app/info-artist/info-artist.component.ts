import { Component, OnInit } from '@angular/core';
import { EventCatcherService } from '../services/event-catcher.service';
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
  selector: 'app-info-artist',
  templateUrl: './info-artist.component.html',
  styleUrls: ['./info-artist.component.css']
})
export class InfoArtistComponent implements OnInit {

  public artists = [];
  public inputSearch : string;

  constructor(private _EventCatcherService: EventCatcherService, private route: ActivatedRoute, private router : Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) =>{
      this.inputSearch = params['value'];
      this._EventCatcherService.getArtistListCatcher(this.inputSearch)
      .subscribe(data=>
        this.artists = data.resultsPage.results.artist);
    });
  }

}
