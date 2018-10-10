import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventCatcherService {

  public _url: string = "https://api.songkick.com/api/3.0/artists/313388/calendar.json?apikey=R82Hox7PJZDJyV0G";

  constructor(private http: HttpClient) { }

  getEventListCatcher(): Observable<any>{
    return this.http.get(this._url);
  };
}