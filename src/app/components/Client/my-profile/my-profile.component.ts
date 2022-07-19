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

  ngOnInit(): void {
    this.myProfile();
  }

  myProfile() {
    this.userRest.myProfile().subscribe({
      next: (res: any) => {
        this.userGetId = res.user;
      },
      error: (err)=>{
        console.log(err.error.message);
      }
    });
  }

 
}
