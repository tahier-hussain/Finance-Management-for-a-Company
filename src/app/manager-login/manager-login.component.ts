import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager-login',
  templateUrl: './manager-login.component.html',
  styleUrls: ['./manager-login.component.css']
})
export class ManagerLoginComponent implements OnInit {

	login: FormGroup;

  regUsers;

  constructor(private usersService: UsersService, private router: Router) { 
  	this.regUsers = this.usersService.getManager();
  }

  ngOnInit() {

  this.login = new FormGroup({

  mail: new FormControl(),
  password: new FormControl()

  })

  }

  onSubmit(manager) {
  	console.log(manager);
  	console.log("Called");
  	let temp = false;
  	for(let i in this.regUsers) {
      let mail = this.regUsers[i].mail;
      let pass = this.regUsers[i].password;

      if(mail == manager.mail && pass == manager.password) {
        temp=true;
        alert("Login Successful");
        this.router.navigate(['/manager-profile']);
        break;
      }
    }
    if(!temp) {
      alert("Incorrect data");
    }

  }

}
