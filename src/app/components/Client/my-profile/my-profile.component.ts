import { Component, OnInit } from '@angular/core';
import { UserRestService } from 'src/app/services/userRest/user-rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  constructor(private userRest: UserRestService,private router: Router) {}

  userGetId: any;
  name: any;
  surname: any;
  username:any;
  email: any;
  phone: any;
  userId:any



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
        this.userId = res.user._id
        this.userGetId = res.user
        
        
      },
      error: (err)=>{
        console.log(err.error.message);
      }
    });
  }




  deleteProfile(){
    this.userRest.deleteProfile(this.userId).subscribe({
      next: (res:any)=>{
        alert(res.message)
        localStorage.clear();
        this.router.navigateByUrl('/home');

        
      },
      error: (err)=>{
        alert(err.error.message || err.error)
  
      }
    });
    
  }


  updateProfile() {
    this.userGetId.password = undefined;
    this.userGetId.role = undefined;
    this.userRest.updateProfile(this.userGetId).subscribe({
      next: (res: any) => {
        alert(res.message);
        this.myProfile();
        console.log(res)
      },
      error: (err) => {
        console.log(err.error.message);
      },
    });
  }

 
}
