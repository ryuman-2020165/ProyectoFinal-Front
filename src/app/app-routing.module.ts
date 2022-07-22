import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/admin/users/users.component';
import { CategoryComponent } from './components/admin/category/category.component';
import { DepartmentComponent } from './components/admin/department/department.component';
import { TripComponent } from './components/admin/trip/trip.component';
import { UserGuard } from './guards/user.guard';
import { MyProfileComponent } from './components/Client/my-profile/my-profile.component';
import { ClientCategoryComponent } from './components/Client/client-category/client-category.component';
import { ClientDepartmentComponent } from './components/Client/client-department/client-department.component';
import { ClientTripComponent } from './components/Client/client-trip/client-trip.component';
import { LodgeComponent } from './components/admin/lodge/lodge.component';
import { ClientLodgeComponent } from './components/Client/client-lodge/client-lodge.component';
import { ClientDestinyComponent } from './components/Client/client-destiny/client-destiny.component';
import { DestinyComponent } from './components/admin/destiny/destiny.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {path: 'myProfile',component:MyProfileComponent},
  {path: 'category',component:ClientCategoryComponent},
  {path: 'department',component:ClientDepartmentComponent},
  {path: 'trip', component:ClientTripComponent},
  { path: 'lodge', component:ClientLodgeComponent},
  { path: 'destiny', component:ClientDestinyComponent},
  { path: 'admin/users', canActivate: [UserGuard], component: UsersComponent },
  { path: 'admin/category', canActivate: [UserGuard], component: CategoryComponent },
  { path: 'admin/department', canActivate: [UserGuard], component: DepartmentComponent },
  { path: 'admin/trip', canActivate: [UserGuard], component: TripComponent },
  { path: 'admin/lodge', canActivate: [UserGuard], component: LodgeComponent},
  { path: 'admin/destiny', canActivate: [UserGuard], component: DestinyComponent},


  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
