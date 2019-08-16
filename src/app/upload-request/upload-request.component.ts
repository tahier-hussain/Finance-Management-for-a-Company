import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AdminRequestService } from '../admin-request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-request',
  templateUrl: './upload-request.component.html',
  styleUrls: ['./upload-request.component.css']
})
export class UploadRequestComponent implements OnInit {

	request: FormGroup;

  constructor(private usersService: AdminRequestService, private router: Router) { }

  ngOnInit() {

  this.request = new FormGroup({

  name: new FormControl(),
  empId: new FormControl(),
  amount: new FormControl(),
  purpose: new FormControl(),
  description: new FormControl()

  })

  }

  onSubmit(request) {
  	request["approval"] = "Not Yet Processed";
  	console.log(request);
  	this.usersService.addRequest(request);
	this.router.navigate(['\admin-profile']);  	

  }

}
