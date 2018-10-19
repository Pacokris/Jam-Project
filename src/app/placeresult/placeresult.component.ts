import { Component, OnInit } from '@angular/core';
import { EventCatcherService } from '../services/event-catcher.service';
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
  selector: 'app-placeresult',
  templateUrl: './placeresult.component.html',
  styleUrls: ['./placeresult.component.css']
})
export class PlaceresultComponent implements OnInit {

  public area = [];
  public inputSearch : string;


  constructor(private _EventCatcherService: EventCatcherService, private route: ActivatedRoute, private router : Router) { }


  sendInputList(input) {
    this.router.navigate(['/placelist', input]);
    
  }

  sendInputMap(input) {
    this.router.navigate(['/map', input]);
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) =>{
      this.inputSearch = params['value'];
      this._EventCatcherService.getArea(this.inputSearch)
      .subscribe(data=> 
        this.area = data.resultsPage.results.location);
      });
    }

}
