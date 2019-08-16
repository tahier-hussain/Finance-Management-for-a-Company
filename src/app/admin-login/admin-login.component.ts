import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
	regUsers;

  constructor(private userService: UsersService, private router: Router) { 
  	this.regUsers = this.userService.getAdmin();
  }

  login: FormGroup;

  onSubmit(admin) {
  	console.log(admin);
  	console.log("Called");
  	let temp = false;
  	for(let i in this.regUsers) {
      let mail = this.regUsers[i].mail;
      let pass = this.regUsers[i].password;

      if(mail == admin.mail && pass == admin.password) {
        temp=true;
        alert("Login Successful");
        this.router.navigate(['/admin-profile']);
        break;
      }
    }
    if(!temp) {
      alert("Incorrect data");
    }

  }

  ngOnInit() {

  this.login = new FormGroup({

  mail: new FormControl(),
  password: new FormControl()

  })

  }

}
