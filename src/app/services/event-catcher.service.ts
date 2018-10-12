import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventCatcherService {

  public _url: string;
  // U2 ID : 313388

  constructor(private http: HttpClient) { }

  getEventListCatcher(inputSearch): Observable<any>{
    this._url = "https://api.songkick.com/api/3.0/artists/" + inputSearch + "/calendar.json?apikey=R82Hox7PJZDJyV0G"
    return this.http.get(this._url);
  };

  getArtistListCatcher(inputSearch): Observable<any>{
    this._url = "https://api.songkick.com/api/3.0/search/artists.json?apikey=R82Hox7PJZDJyV0G&query=" + inputSearch
    return this.http.get(this._url)
  }
}
// https://api.songkick.com/api/3.0/search/artists.json?apikey={your_api_key}&query={artist_name}