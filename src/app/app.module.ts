import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WhoAreYouComponent } from './who-are-you/who-are-you.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ManagerLoginComponent } from './manager-login/manager-login.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { ManagerProfileComponent } from './manager-profile/manager-profile.component';
import { UploadRequestComponent } from './upload-request/upload-request.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { ManagerRegisterComponent } from './manager-register/manager-register.component';
import { ApproveRequestComponent } from './approve-request/approve-request.component';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { UsersService } from './users.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ViewTableComponent } from './view-table/view-table.component';
import { AdminRequestService } from './admin-request.service';

@NgModule({
  declarations: [
    AppComponent,
    WhoAreYouComponent,
    AdminLoginComponent,
    ManagerLoginComponent,
    AdminProfileComponent,
    ManagerProfileComponent,
    UploadRequestComponent,
    AdminRegisterComponent,
    ManagerRegisterComponent,
    ApproveRequestComponent,
    PageNotFoundComponent,
    ViewTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StorageServiceModule
  ],
  providers: [UsersService, AdminRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
