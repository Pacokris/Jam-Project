import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class EventCatcherService {
  public _url: string;
  public d: Date = new Date();
  public dateUrl: string = this.formatDate(this.d);
  public urlFM: string;
  public similarUrl: string;
  // U2 ID : 313388

  constructor(private http: HttpClient) {}

  formatDate(date) {
    let mm = date.getMonth() + 1; // getMonth() is zero-based
    let dd = date.getDate();

    return [
      date.getFullYear(),
      (mm > 9 ? "" : "0") + mm,
      (dd > 9 ? "" : "0") + dd
    ].join("-");
  };

  rechercheElargie: number = 0;

  public resultParameter: string = 'Artists' ;
  public placeholderValue: string = 'Search your artist' ;
  public checkedArtist: boolean = true;

  setToArtist() {
    return this.resultParameter = "Artists", this.placeholderValue = "Search your artist", this.checkedArtist = true;  
  }

  setToLocation() {
    return this.placeholderValue = "Search your location", this.resultParameter = "Locations",this.checkedArtist = false;  
  }

  setRechercheElargie(isElargie) {
    this.rechercheElargie = isElargie ? 1 : 0;
  };

  getEventListCatcher(inputSearch): Observable<any> {
    this._url =
      "https://api.songkick.com/api/3.0/artists/" +
      inputSearch +
      "/calendar.json?apikey=R82Hox7PJZDJyV0G";
    return this.http.get(this._url);
  };

  getArtistListCatcher(inputSearch): Observable<any> {
    this._url =
      "https://api.songkick.com/api/3.0/search/artists.json?apikey=R82Hox7PJZDJyV0G&query=" +
      inputSearch;
    return this.http.get(this._url);
  };
  getArtistRhrn(latitude, longitude): Observable<any> {
    this._url =
      "https://api.songkick.com/api/3.0/events.json?apikey=R82Hox7PJZDJyV0G&min_date=" +
      this.dateUrl +
      "&max_date=" +
      this.dateUrl +
      "&location=geo:" +
      latitude +
      "," +
      longitude;
    return this.http.get(this._url);
  };

  getLocationDate(dateDebutStr, dateFinStr, IdArea): Observable<any> {
    this._url =
      "https://api.songkick.com/api/3.0/events.json?apikey=R82Hox7PJZDJyV0G&min_date=" +
      dateDebutStr +
      "&max_date=" +
      dateFinStr +
      "&location=sk:" +
      IdArea;
    return this.http.get(this._url);
  };

  getArtistInfoCatcher(inputSearch): Observable<any> {
    this.urlFM =
      "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" +
      inputSearch +
      "&api_key=d50d7e40256f53b0a6d56732619d1903&format=json";
    return this.http.get(this.urlFM);
  };

  getArea(inputSearch): Observable<any> {
    this._url =
      "https://api.songkick.com/api/3.0/search/locations.json?apikey=R82Hox7PJZDJyV0G&query=" +
      inputSearch;
    return this.http.get(this._url);
  };

  getAreaEvent(inputSearch): Observable<any> {
    this._url =
      "https://api.songkick.com/api/3.0/metro_areas/" +
      inputSearch +
      "/calendar.json?apikey=R82Hox7PJZDJyV0G";
    return this.http.get(this._url);
  };

  getSimilarArtists(inputSearch): Observable<any>{
    this.similarUrl = "https://api.songkick.com/api/3.0/artists/" + inputSearch + "/similar_artists.json?apikey=R82Hox7PJZDJyV0G";
    return this.http.get(this.similarUrl);
  };
}
// https://api.songkick.com/api/3.0/search/artists.json?apikey={your_api_key}&query={artist_name}
