import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rhrn',
  templateUrl: './rhrn.component.html',
  styleUrls: ['./rhrn.component.css']
})
export class RhrnComponent implements OnInit {

  constructor() { }


  location = {};
  setPosition(position){
     this.location = position.coords;
     console.log(position.coords);
     }
     ngOnInit(){
       if(navigator.geolocation){
          navigator.geolocation.getCurrentPosition(this.setPosition.bind(this));
          };
       }
}
