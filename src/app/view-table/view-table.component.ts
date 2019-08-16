import { Component, OnInit } from '@angular/core';
import { AdminRequestService } from '../admin-request.service';

@Component({
  selector: 'app-view-table',
  templateUrl: './view-table.component.html',
  styleUrls: ['./view-table.component.css']
})
export class ViewTableComponent implements OnInit {
	regUsers;

  constructor(private usersService: AdminRequestService) { 

  	this.regUsers = this.usersService.getRequest();
  	console.log(this.regUsers);
  }


  ngOnInit() {
  }
}
