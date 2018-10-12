import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  sendInputResult(input){
    this.router.navigate(['/result', input]);
  }
  // sendInputList(input) {
  //   this.router.navigate(['/list', input]);
  // }
  // sendInputMap(input) {
  //   this.router.navigate(['/map', input]);
  // }

}
