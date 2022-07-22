import { Component, OnInit } from '@angular/core';
import { UserRestService } from 'src/app/services/userRest/user-rest.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  token: any;
  role: any;
  username: any;
  name: any;
  surname: any;
  uri:any;
  userImage:any;
  filesToUpload:any


  constructor(private userRest: UserRestService) {}

  ngOnInit(): void {
    this.token = this.userRest.getToken();
    this.role = this.userRest.getIdentity().role;
    this.username = this.userRest.getIdentity().username;
    this.name = this.userRest.getIdentity().name;
    this.surname = this.userRest.getIdentity().surname;
  }
  logOut() {
    localStorage.clear();
  }

  fileChange(fileInput:any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
    console.log(this.filesToUpload);
    
  }
  ngDoCheck(): void {
    let outService = localStorage.getItem('outService');
    if (this.token != '') {
        this.userImage =  this.userRest.getIdentity().image;
        this.uri = environment.baseUrl + 'user/getImage/'+this.userImage
    }
    
  }
}
