import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { UserRestService } from 'src/app/services/userRest/user-rest.service';
import { Router } from '@angular/router';

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
        alert('Password doesnt match');
        clearTimeout(this.timer);
      }else{
        alert('Password match');
        clearTimeout(this.timer);
      }
    }, 1500)
  }



  register(){
    console.log(this.user);
    this.userRest.register(this.user).subscribe({
      next: (response:any)=>{
        alert(response.message + ' you can login now');
        this.router.navigateByUrl('/login');
      },
      error: (err)=> alert(err.error.message || err.error)
    })
  }

}
