import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongkicklistcatcherService {

  public _url: string = "assets/calendarU2.json";

  constructor(private http: HttpClient) { }

  getSongKickListCatcher(): Observable<any>{
    return this.http.get(this._url);
  };
}
