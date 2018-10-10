import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { NavComponent } from './nav/nav.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { ResultComponent } from './result/result.component';
import { RhrnComponent } from './rhrn/rhrn.component';
import { ListComponent } from './list/list.component';
import { MapComponent } from './map/map.component';
import { EventComponent } from './event/event.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SearchComponent,
    HomeComponent,
    ResultComponent,
    RhrnComponent,
    ListComponent,
    MapComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_KEY'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
