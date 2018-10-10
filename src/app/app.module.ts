import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
<<<<<<< HEAD
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
=======
import { HttpClientModule } from '@angular/common/http';
>>>>>>> origin/mergeListMap

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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'list', component: ListComponent},
  {path: 'home', component: HomeComponent},
  { path: 'map', component: MapComponent }
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
    EventComponent
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
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCT2v5Owh6TcjngP2fO2Gbis9ihAYYObYQ'
    }),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
