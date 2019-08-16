import { Injectable, Inject } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

const STORAGE_KEY = 'local_request_details';

@Injectable({
  providedIn: 'root'
})
export class AdminRequestService {

  constructor(@Inject(LOCAL_STORAGE) private storage:StorageService) { }

  addRequest(request) {
  	const currentUsers = this.storage.get(STORAGE_KEY) || [];

    currentUsers.push(request);

    this.storage.set(STORAGE_KEY, currentUsers);

    console.log(this.storage.get(STORAGE_KEY));
  }

  getRequest() {
  	return this.storage.get(STORAGE_KEY) || [];
  }

  update(approval, i) {
  	const currentUsers = this.storage.get(STORAGE_KEY) || [];
  	currentUsers[i].approval = approval;
  	this.storage.set(STORAGE_KEY, currentUsers);
  }
}
