import { Component, OnInit, Output } from '@angular/core';
import { EventCatcherService } from '../services/event-catcher.service';
import { ActivatedRoute, Params, Router, RouterLink } from '@angular/router';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-placeresult',
  templateUrl: './placeresult.component.html',
  styleUrls: ['./placeresult.component.css']
})
export class PlaceresultComponent implements OnInit {

  public area = [];
  public inputSearch: string;
  public nbVille: number;
  public test = [];

  constructor(private _EventCatcherService: EventCatcherService, private route: ActivatedRoute, private router: Router) { }

  sendInputList(input, name) {

    this.router.navigate(['/placelist', input, name]);

  }

  sendInputMap(input) {
    this.router.navigate(['/map', input]);
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.inputSearch = params['value'];
      this._EventCatcherService.getArea(this.inputSearch)
        .subscribe(data => {
          this.test = data.resultsPage;
          this.area = this.test['results'].location;
          this.nbVille = this.test['totalEntries'];
          console.log(this.test);
          console.log(this.nbVille);
          if (this.nbVille === 1) { this.sendInputList(this.area[0].metroArea.id, this.area[0].city.displayName); }
        });

    });
  }
}
