import { Component, OnInit } from '@angular/core';
import { UserRestService } from 'src/app/services/userRest/user-rest.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  constructor(private userRest: UserRestService) {}

  userGetId: any;
  name: any;
  surname: any;
  username:any;
  email: any;
  phone: any;



  ngOnInit(): void {
    this.myProfile();
  }

  myProfile() {
    this.userRest.myProfile().subscribe({
      next: (res: any) => {
        
        this.name = res.user.name
        this.surname = res.user.surname
        this.username = res.user.username
        this.email = res.user.email
        this.phone = res.user.phone
        
        
      },
      error: (err)=>{
        console.log(err.error.message);
      }
    });
  }

 
}
