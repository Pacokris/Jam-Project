import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { NavComponent } from './nav/nav.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { ResultComponent } from './result/result.component';
import { RhrnComponent } from './rhrn/rhrn.component';
import { RhrnMapComponent } from './rhrn-map/rhrn-map.component';
import { ListComponent } from './list/list.component';
import { MapComponent } from './map/map.component';
import { EventComponent } from './event/event.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { PlacelistComponent } from './placelist/placelist.component';
import { PlaceresultComponent } from './placeresult/placeresult.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'list/:value', component: ListComponent},
  {path: 'list/:value/:name', component: ListComponent},
  {path: 'home', component: HomeComponent},
  { path: 'map', component: MapComponent },
  { path: 'rhrn', component: RhrnComponent },
  { path: 'rhrnMap', component: RhrnMapComponent },
  { path: 'map/:value', component: MapComponent },
  { path: 'result/:value', component: ResultComponent },
  { path: 'placelist/:value/:name', component: PlacelistComponent },
  { path: 'placelist/:value/:name/:name', component: PlacelistComponent },
  { path: 'placeresult/:value', component: PlaceresultComponent }

];

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
    EventComponent,
    RhrnMapComponent,
    PlacelistComponent,
    PlaceresultComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
    MatToolbarModule,
    MatRadioModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCT2v5Owh6TcjngP2fO2Gbis9ihAYYObYQ'
    }),
    AgmSnazzyInfoWindowModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
