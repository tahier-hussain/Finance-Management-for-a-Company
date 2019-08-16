import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-manager-register',
  templateUrl: './manager-register.component.html',
  styleUrls: ['./manager-register.component.css']
})
export class ManagerRegisterComponent implements OnInit {

	register: FormGroup;

  constructor(private usersService: UsersService) { }

  ngOnInit() {

  this.register = new FormGroup({

  name: new FormControl(),
  password: new FormControl(),
  mail: new FormControl()

  })

  }

  onSubmit(manager) {
  	console.log(manager);
  	this.usersService.addManager(manager);
  }

}
