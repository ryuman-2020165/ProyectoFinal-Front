import { Component, OnInit } from '@angular/core';
import { UsersRestService } from 'src/app/services/usersRest/users-rest.service';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
 users:any;
 user:any;
 userId:any;
 userGetId:any;
 search:any

  constructor(
   private usersRest: UsersRestService
  ) { 
    this.user = new UserModel('','','','','','','','','')
  }

  ngOnInit(): void {
    this.getUsers()
  }


  getUsers(){
    this.usersRest.getUsers().subscribe({
      next:(res:any)=>{
        this.users = res.findUsers;
      },
      error: (err)=>  console.log(err.error.message)
    })
  }

  getUser(id:string){
    this.usersRest.getUser(id).subscribe({
      next: (res:any)=>{
        
  
        
        this.userGetId = res.findUser;
        delete this.userGetId.password

      },
      error: (err)=>{
        console.log(err.error.message);
      }
  })
}

saveUser(addUserForm: any){
  this.usersRest.saveUser(this.user).subscribe({
    next: (res:any)=>{
      alert(res.message)
      this.getUsers()
      addUserForm.reset();
    },
    error: (err)=>{
      alert(err.error.message || err.error)
    }
  })
}

updateUser(){
  this.usersRest.updateUser(this.userGetId,this.userGetId._id).subscribe({
    next: (res:any)=>{
      alert(res.message)
      
      this.getUsers()
    },
    error: (err)=>{
      alert(err.error.message || err.error)
      

    }
  })

}


  deleteUser(id:string){
    this.usersRest.deleteUser(id).subscribe({
      next: (res:any)=>{
        alert(res.message)
        this.getUsers()
      },
      error: (err)=>{
        alert(err.error.message || err.error)
  
      }
    })
  }
}
