import { Component, OnInit} from "@angular/core";
import { EventCatcherService } from "../services/event-catcher.service";
import { ActivatedRoute, Router, Params } from "@angular/router";

@Component({
  selector: "app-placelist",
  templateUrl: "./placelist.component.html",
  styleUrls: ["./placelist.component.css"]
})
export class PlacelistComponent implements OnInit{
  public places = [];
  public inputSearch: string;
  public villes = [];
  public ville: string;
  public Id: number;
  private displayNoEvent;

  constructor(
    private _EventCatcherService: EventCatcherService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.displayNoEvent = false;
  }

  ngOnInit() {
    this.loadResults();
  }

  sendInputList() {
    this._EventCatcherService.setRechercheElargie(1);
    this.router.navigate([
      "/placelist",
      this.inputSearch,
      this.ville,
      this.ville
    ]);
  }

  loadResults() {
    this.displayNoEvent = false;
    console.log(this._EventCatcherService.rechercheElargie);
    this.route.params.subscribe((params: Params) => {
      this.inputSearch = params["value"];
      this.ville = params["name"];
      console.log(this.ville, "test");
      this._EventCatcherService
        .getAreaEvent(this.inputSearch)
        .subscribe(data => {
          this.places = data.resultsPage.results.event;
          console.log(this.places);
          this.places.forEach(event => {
            const city = event.location.city;
            event.location.city = city.slice(0, city.indexOf(","));
            const artiste = event.displayName;
            event.displayName = artiste.slice(0, artiste.indexOf("at"));
            if (this._EventCatcherService.rechercheElargie == 0) {
              this.displayNoEvent = true;
              this.villes = this.places.filter(ville => {
                return ville.location.city == this.ville;
              });
            } else {
              this.villes = this.places;
            }
          });
          if (this._EventCatcherService.rechercheElargie >= 1) {
            this._EventCatcherService.setRechercheElargie(0);
          }
        });
    });
    
    console.log(this._EventCatcherService.rechercheElargie, "2");
  
  }
}
