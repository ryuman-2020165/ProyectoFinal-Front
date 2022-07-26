import { Component, OnInit } from '@angular/core';
import { UsersRestService } from 'src/app/services/usersRest/users-rest.service';
import { UserModel } from 'src/app/models/user.model';
import Swal from 'sweetalert2';

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
      Swal.fire({
        icon: 'success',
        title: res.message,
        showConfirmButton:false,
        timer: 1300,
      });
      this.getUsers()
      addUserForm.reset();
    },
    error: (err)=>{
      Swal.fire({
        icon: 'warning',
        title: err.error.message || err.error,
        showConfirmButton:false,
        timer: 1300,
      });
    }
  })
}

updateUser(){
  this.usersRest.updateUser(this.userGetId,this.userGetId._id).subscribe({
    next: (res:any)=>{
      Swal.fire({
        icon: 'success',
        title: res.message,
        showConfirmButton:false,
        timer: 1300,
      });
      
      this.getUsers()
    },
    error: (err)=>{
      Swal.fire({
        icon: 'warning',
        title: err.error.message || err.error,
        showConfirmButton:false,
        timer: 1300,
      });
      

    }
  })

}


deleteUser(id:string){
    
    Swal.fire({
      title: '¿Quieres eliminar el usuario?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Eliminar',
      denyButtonText: `No eliminar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.usersRest.deleteUser(id).subscribe({
          next: (res:any)=>{
            Swal.fire({
              icon: 'success',
              title: res.message,
              showConfirmButton:false,
              timer: 1300,
            });
            this.getUsers()
          },
          error: (err)=>{
            Swal.fire({
              icon: 'warning',
              title: err.error.message || err.error,
              showConfirmButton:false,
              timer: 1300,
            });
      
          }
        })
    
      } else if (result.isDenied) {
        Swal.fire('No se ha eliminado el usuario')
      }
    })


  }
}
