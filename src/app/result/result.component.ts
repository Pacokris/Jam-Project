import { Component, OnInit } from '@angular/core';
import { EventCatcherService } from '../services/event-catcher.service';
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  public artists = [];
  public inputSearch : string;
  public infoArtist : any;


  constructor(private _EventCatcherService: EventCatcherService, private route: ActivatedRoute, private router : Router) { }


  sendInputList(input) {
    this.router.navigate(['/list', input]);
  }

  sendInputMap(input) {
    this.router.navigate(['/map', input]);
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) =>{
      this.inputSearch = params['value'];
      this._EventCatcherService.getArtistListCatcher(this.inputSearch)
      .subscribe(data=>
        this.artists = data.resultsPage.results.artist);
      this._EventCatcherService.getArtistInfoCatcher(this.inputSearch)
      .subscribe(data=>
        this.infoArtist = data.artist);
      });
    }

}
