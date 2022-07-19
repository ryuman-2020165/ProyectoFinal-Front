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

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin/users', canActivate: [UserGuard], component: UsersComponent },
  { path: 'admin/category', canActivate: [UserGuard], component: CategoryComponent },
  { path: 'admin/department', canActivate: [UserGuard], component: DepartmentComponent },
  { path: 'admin/trip', canActivate: [UserGuard], component: TripComponent },


  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
