import { Injectable, Inject } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

const STORAGE_KEY1 = 'local_admin_details';
const STORAGE_KEY2 = 'local_manager_details';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(@Inject(LOCAL_STORAGE) private storage:StorageService) { }

  addAdmin(admin) {
  	const currentUsers = this.storage.get(STORAGE_KEY1) || [];

    currentUsers.push(admin);

    this.storage.set(STORAGE_KEY1, currentUsers);

    console.log(this.storage.get(STORAGE_KEY1));
  }

  addManager(manager) {
  	const currentUsers = this.storage.get(STORAGE_KEY2) || [];

    currentUsers.push(manager);

    this.storage.set(STORAGE_KEY2, currentUsers);

    console.log(this.storage.get(STORAGE_KEY2));
  }

  getAdmin() {
  	return this.storage.get(STORAGE_KEY1) || [];
  }

  getManager() {
  	return this.storage.get(STORAGE_KEY2) || [];
  }




}
