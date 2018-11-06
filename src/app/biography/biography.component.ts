import { Component, OnInit } from '@angular/core';
import { EventCatcherService } from '../services/event-catcher.service';
import { ActivatedRoute, Router, Params, } from "@angular/router";
@Component({
  selector: 'app-biography',
  templateUrl: './biography.component.html',
  styleUrls: ['./biography.component.css']
})
export class BiographyComponent implements OnInit {

  public inputSearch : string;
  public name : string;
  public artist = {};
  public artistBioSummary : string;
  public similars = [];
  public artistID;

  constructor(private _EventCatcherService: EventCatcherService, private route: ActivatedRoute, private router : Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) =>{
      this.name = params['name'];
      this.inputSearch = params['value'];
      this._EventCatcherService.getArtistInfoCatcher(this.name)
      .subscribe(data => {
        this.artist = data.artist
        this.bioWithoutLink(data.artist.bio.summary);
      });
      this._EventCatcherService.getSimilarArtists(this.inputSearch)
      .subscribe(data =>{
        this.similars = data.resultsPage.results.artist
      });

    })
  }
  
  sendInputList(value, name) {
    this.router.navigate(['/list', value, name]);
  }

  sendInputBio(value, name){
    this.router.navigate(['/bio', value, name])
  }

  bioWithoutLink = param => this.artistBioSummary = param.slice(0, param.indexOf("[")).slice(0, param.indexOf("<a"));


}
