import { Component, OnInit } from '@angular/core';
import { UsersRestService } from 'src/app/services/usersRest/users-rest.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
 users:any;

  constructor(
   private usersRest: UsersRestService
  ) { }

  ngOnInit(): void {
    this.getUsers()
  }


  getUsers(){
    this.usersRest.getUsers().subscribe({
      next:(res:any)=>{
        this.users = res.findUsers;
        console.log(this.users);
      },
      error: (err)=>  console.log(err.error.message)
    })
  }
}
