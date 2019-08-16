import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-who-are-you',
  templateUrl: './who-are-you.component.html',
  styleUrls: ['./who-are-you.component.css']
})
export class WhoAreYouComponent implements OnInit {
	
	temp: FormGroup;

  constructor() { }

  ngOnInit() {

  this.temp = new FormGroup({
  
  })

  }

}
