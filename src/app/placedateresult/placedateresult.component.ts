import { Component, OnInit } from '@angular/core';
import { EventCatcherService } from '../services/event-catcher.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-placedateresult',
  templateUrl: './placedateresult.component.html',
  styleUrls: ['./placedateresult.component.css']
})
export class PlacedateresultComponent implements OnInit {
  public events = []
  public dateDebut: string;
  public dateFin: string;
  public IdArea: number;
  public area: string;
  public villes = [];
  public ville: string;
  public rechercheElargie: boolean;
  public detailConcert = [];

  constructor(private _EventCatcherService: EventCatcherService, private route: ActivatedRoute, private router: Router) { }

  goToMap(lat, lng, i) {
   
    this.router.navigate(['map-location-date',this.dateDebut, this.dateFin,lat , lng]);
    console.log(this.villes[i]);
    this.detailConcert = this.villes[i];
    this._EventCatcherService.getDetailsConcert(this.detailConcert);
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.dateDebut = params['value1'];
      this.dateFin = params['value2'];
      this.IdArea = params['value3'];
      this.ville = params['value4'];
      this.rechercheElargie = params['value5']
      this._EventCatcherService.getLocationDate(this.dateDebut, this.dateFin, this.IdArea)
        .subscribe(data => {
          this.events = data.resultsPage.results.event;
          console.log('zone elargie', this.rechercheElargie);
          this.area = this.events[0].venue.metroArea.displayName;
          this.events.forEach(event => {
            const city = event.location.city;
            event.location.city = city.slice(0, city.indexOf(","));
            const artiste = event.displayName;
            event.displayName = artiste.slice(0, artiste.indexOf("at"));
            if (this.rechercheElargie == true) {
              this.villes = this.events.filter(ville => {
                return ville.location.city == this.area;
              });
            }
            else { this.villes = this.events }

          });

        });

  });
}

}
