import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WhoAreYouComponent } from './who-are-you/who-are-you.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ManagerLoginComponent } from './manager-login/manager-login.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { ManagerProfileComponent } from './manager-profile/manager-profile.component';
import { UploadRequestComponent } from './upload-request/upload-request.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { ManagerRegisterComponent } from './manager-register/manager-register.component';
import { ApproveRequestComponent } from './approve-request/approve-request.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ViewTableComponent } from './view-table/view-table.component';

const routes: Routes = [

	{ path:'', redirectTo: '/who-are-you', pathMatch: 'full'},
	{ path:'who-are-you', component: WhoAreYouComponent },
	{ path:'admin-login', component: AdminLoginComponent},
	{ path:'manager-login', component: ManagerLoginComponent},
	{ path:'admin-profile', component: AdminProfileComponent},
	{ path:'manager-profile', component: ManagerProfileComponent},
	{ path:'upload-request', component: UploadRequestComponent},
	{ path:'admin-register', component: AdminRegisterComponent},
	{ path:'manager-register', component: ManagerRegisterComponent},
	{ path:'approve-request', component: ApproveRequestComponent},
	{ path:'view-table', component: ViewTableComponent},
	{ path: '**' , component: PageNotFoundComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
