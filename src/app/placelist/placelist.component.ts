import { Component, OnInit } from '@angular/core';
import { EventCatcherService } from '../services/event-catcher.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormControl } from '@angular/forms';



@Component({
  selector: 'app-placelist',
  templateUrl: './placelist.component.html',
  styleUrls: ['./placelist.component.css']
})
export class PlacelistComponent implements OnInit {
  public places = [];
  public inputSearch: string;
  public villes = [];
  public ville: string;
  public Id: number;
  public area: string;
  private displayNoEvent;
  public rechercheElargie = false;
  public test = [];
  public nbEvent: number;
  public minDate = new Date();
  public date1 = new FormControl(new Date());
  public dateDebut: Date;
  public dateFin: Date;
  public dateDebutStr: string;
  public dateFinStr: string;
  public IdArea: number;
  public detailConcert = [];

  constructor(
    private _EventCatcherService: EventCatcherService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.displayNoEvent = false;
  }


  sendDateList(dateDebut, dateFin) {

    this.dateDebutStr = this._EventCatcherService.formatDate(dateDebut);
    this.dateFinStr = this._EventCatcherService.formatDate(dateFin);

    this.router.navigate(['/placedateresult', this.dateDebutStr, this.dateFinStr, this.IdArea, this.ville, this.rechercheElargie]);

  }

  ngOnInit() {
    this.loadResults();
  }

  goToMap(lat, lng, i) {

    this.router.navigate(['map-location', lat, lng]);
    console.log(this.villes[i]);
    this.detailConcert = this.villes[i];
    this._EventCatcherService.getDetailsConcert(this.detailConcert);
  }

  sendInputList() {
    this._EventCatcherService.setRechercheElargie(1);
    this.router.navigate([
      '/placelist',
      this.inputSearch,
      this.ville,
      this.ville
    ]);
  }

  loadResults() {
    this.displayNoEvent = false;
    console.log(this._EventCatcherService.rechercheElargie);
    this.route.params.subscribe((params: Params) => {
      this.inputSearch = params['value'];
      this.ville = params['name'];
      console.log(this.ville, 'test');
      this._EventCatcherService
        .getAreaEvent(this.inputSearch)
        .subscribe(data => {
          this.test = data.resultsPage;
          this.nbEvent = this.test['totalEntries'];
          this.places = data.resultsPage.results.event;
          this.IdArea = this.places[0].venue.metroArea.id;
          console.log(this.IdArea);
          console.log(this.nbEvent);

          this.area = this.places[0].venue.metroArea.displayName;
          console.log(this.area, 'area');
          this.places.forEach(event => {
            const city = event.location.city;
            event.location.city = city.slice(0, city.indexOf(','));
            const artiste = event.displayName;
            event.displayName = artiste.slice(0, artiste.indexOf(' at'));
            if (this._EventCatcherService.rechercheElargie === 0) {
              this.displayNoEvent = true;
              this.villes = this.places.filter(ville => {
                return ville.location.city === this.ville;
              });
            } else {
              this.villes = this.places;
            }
          });
          if (this._EventCatcherService.rechercheElargie >= 1) {
            this._EventCatcherService.setRechercheElargie(0);
            this.rechercheElargie = true;
          }
        });
    });

    console.log(this._EventCatcherService.rechercheElargie, '2');

  }
}
