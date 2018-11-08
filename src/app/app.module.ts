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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { PlacelistComponent } from './placelist/placelist.component';
import { PlaceresultComponent } from './placeresult/placeresult.component';
import { AgmDirectionModule } from 'agm-direction'   // agm-direction



import { MatDatepickerModule, MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material';
import { PlacedateresultComponent } from './placedateresult/placedateresult.component';
import { BiographyComponent } from './biography/biography.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ResultvenueComponent } from './resultvenue/resultvenue.component';
import { ListvenuesComponent } from './listvenues/listvenues.component';
import { MapLocationComponent } from './map-location/map-location.component';



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
  { path: 'placeresult/:value', component: PlaceresultComponent },
  { path: 'placedateresult/:value1/:value2/:value3/:value4/:value5', component: PlacedateresultComponent},
  {path: 'bio/:value/:name', component: BiographyComponent},
  {path: 'resultvenue/:value', component: ResultvenueComponent},
  {path: 'listvenue/:value/:name', component: ListvenuesComponent},
  {path: 'map-location/:lat/:lng/:id/:name', component: MapLocationComponent},
  {path: 'map-location/:lat/:lng', component: MapLocationComponent},
  {path : '**', component: PageNotFoundComponent},


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
    RhrnMapComponent,
    PlacelistComponent,
    PlaceresultComponent,
    PlacedateresultComponent,
    BiographyComponent,
    PageNotFoundComponent,
    ResultvenueComponent,
    ListvenuesComponent,
    MapLocationComponent,

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
    MatMenuModule,
    MatDividerModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    MatExpansionModule,
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCTwghPiz09vTF_5-F3lo5xm10Bsj8T8L4'
    }),
    AgmSnazzyInfoWindowModule,
    BrowserAnimationsModule,
    AgmDirectionModule,

  ],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'fr-FR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
