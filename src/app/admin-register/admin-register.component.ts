import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent implements OnInit {

	register: FormGroup;

  constructor(private usersService : UsersService) { }

  ngOnInit() {

  this.register = new FormGroup({

  name: new FormControl(),
  password: new FormControl(),
  mail: new FormControl()

  })

  }

  onSubmit(admin) {
  	console.log(admin);
    this.usersService.addAdmin(admin);
  }

}
