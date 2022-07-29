import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { UserRestService } from 'src/app/services/userRest/user-rest.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user:UserModel;
  repeatPassword: string = '';
  timer: any;
  hola: string = '';
  

  constructor(
    private userRest: UserRestService,
    private router: Router
  ) { 
    this.user = new UserModel('', '', '', '', '', '', '', '','');
  }

  ngOnInit(): void {
  }

  ///LOS MÉTODOS QUE CREAMOS SIEMPRE VAN DESPUÉS DEL ngOnInit()

  async checkPassword(){
    clearTimeout(this.timer);
    this.timer = await setTimeout(()=>{
      if(this.repeatPassword != this.user.password){
        clearTimeout(this.timer);
      }else{
        clearTimeout(this.timer);
      }
    }, 1500)
  }



  register(){
    console.log(this.user);
    this.userRest.register(this.user).subscribe({
      next: (response:any)=>{
        Swal.fire({
          icon: 'success',
          title: response.message  + ' Puedes iniciar sesión ahora',
          showConfirmButton:false,
          timer: 1300,
        });
        this.router.navigateByUrl('/login');
      },
      
      error: (err)=> {Swal.fire({
        icon: 'warning',
        title: err.error.message || err.error,
        showConfirmButton:false,
        timer: 1300,
      });}
    })
  }

}
