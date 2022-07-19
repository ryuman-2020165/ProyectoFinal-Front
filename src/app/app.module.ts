import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/admin/users/users.component';
import { CategoryComponent } from './components/admin/category/category.component';
import { DepartmentComponent } from './components/admin/department/department.component';
import { SearchPipe } from './pipes/search.pipe';
import { UserComponent } from './components/Client/user/user.component';
import { TripComponent } from './components/admin/trip/trip.component';
import { MyProfileComponent } from './components/Client/my-profile/my-profile.component';
import { ClientCategoryComponent } from './components/Client/client-category/client-category.component';
import { ClientDepartmentComponent } from './components/Client/client-department/client-department.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    HomeComponent,
    UsersComponent,
    CategoryComponent,
    DepartmentComponent,
    SearchPipe,
    UserComponent,
    TripComponent,
    MyProfileComponent,
    ClientCategoryComponent,
    ClientDepartmentComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
