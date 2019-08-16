import { Component, OnInit } from '@angular/core';
import { AdminRequestService } from '../admin-request.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-approve-request',
  templateUrl: './approve-request.component.html',
  styleUrls: ['./approve-request.component.css']
})
export class ApproveRequestComponent implements OnInit {

	regUsers;

  constructor(private usersService: AdminRequestService) {

  this.regUsers = this.usersService.getRequest();
  	console.log(this.regUsers);
  
   }

  approve: FormGroup;

  ngOnInit() {

  this.approve = new FormGroup({
  	approval: new FormControl()
  })

  }

}
