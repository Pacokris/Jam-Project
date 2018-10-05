import { Component, OnInit } from '@angular/core';
import { SongkicklistcatcherService } from '../service/songkicklistcatcher.service';

@Component({
  selector: 'app-songkicklist',
  templateUrl: './songkicklist.component.html',
  styleUrls: ['./songkicklist.component.css']
})
export class SongkicklistComponent implements OnInit {

  public events = [];

  constructor(private _Songkicklistcatcher: SongkicklistcatcherService) { }

  ngOnInit() {
    this._Songkicklistcatcher.getSongKickListCatcher()
        .subscribe(data=> {
          this.events = data.resultsPage.results.event;
        })
  }

}
