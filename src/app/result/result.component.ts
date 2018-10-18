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


  constructor(private _EventCatcherService: EventCatcherService, private route: ActivatedRoute, private router : Router) { }


  sendInputList(input, name) {
    this.router.navigate(['/list', input, name]);
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

      });
    }

}
