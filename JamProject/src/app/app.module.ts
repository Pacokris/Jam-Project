import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeComponent } from './home/home.component';
import { MatButtonModule } from '@angular/material/button';
import { DummyResultComponent } from './dummy-result/dummy-result.component';

const routes: Routes = [
  {path: 'dummy-result', component: DummyResultComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HomeComponent,
    DummyResultComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
