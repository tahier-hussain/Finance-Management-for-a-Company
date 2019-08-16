import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-manager-profile',
  templateUrl: './manager-profile.component.html',
  styleUrls: ['./manager-profile.component.css']
})
export class ManagerProfileComponent implements OnInit {
	
	temp: FormGroup;

  constructor() { }

  ngOnInit() {

  this.temp = new FormGroup({
  
  })

  }

}
