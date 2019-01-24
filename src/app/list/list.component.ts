import { Component, OnInit, HostListener } from '@angular/core';
import { EventCatcherService } from '../services/event-catcher.service';
import { ActivatedRoute, Router, Params, } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public events = [];
  public inputSearch: string;
  public name: string;
  public artist = {};
  public artistBioSummary: string;
  public screenHeight: number;
  public screenWidth: number;
  public similars = [];
  constructor(private _EventCatcherService: EventCatcherService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.name = params['name'];
      this.inputSearch = params['value'];
      this._EventCatcherService.getEventListCatcher(this.inputSearch)
        .subscribe((data) => {
        this.events = data.resultsPage.results.event;
          this.events.forEach(event => {
            const artiste = event.displayName;
            event.displayName = artiste.slice(0, artiste.indexOf('at'));
          });
        });
      this._EventCatcherService.getArtistInfoCatcher(this.name)
        .subscribe(data => {
          this.artist = data.artist;
          this.bioWithoutLink(data.artist.bio.summary);
        });
      this._EventCatcherService.getSimilarArtists(this.inputSearch)
        .subscribe(data => {
          this.similars = data.resultsPage.results.artist;
        });

    });
  }

  sendInputList(value, name) {
    this.router.navigate(['/list', value, name]);
  }

  sendInputBio(value, name) {
    this.router.navigate(['/bio', value, name]);
  }
  sendInputMap(input) {
    this.router.navigate(['/map', input]);
  }

  bioWithoutLink = param => this.artistBioSummary = param.slice(0, param.indexOf('[')).slice(0, param.indexOf('<a'));
}
