import { Component, DoCheck, OnInit } from '@angular/core';
import { UserRestService } from 'src/app/services/userRest/user-rest.service';
import { Router } from '@angular/router';
import { UploadImageService } from 'src/app/services/userRest/upload-image.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit, DoCheck {
  constructor(
    private userRest: UserRestService,
    private uploadImageRest: UploadImageService,
    private router: Router) {
      this.token = userRest.getToken();
      this.identity = userRest.getIdentity();
    }

  userGetId: any;
  name: any;
  surname: any;
  username:any;
  email: any;
  phone: any;
  userId:any
  identity:any
  filesToUpload:any
  uri:any;
  userImage:any;
  token:any;


  ngOnInit(): void {
    this.myProfile();
    this.userImage =  this.userRest.getIdentity().image;
    this.uri = environment.baseUrl + 'user/getImage/'+this.userImage
    console.log(this.uri);
    
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





    Swal.fire({
      title: '¿Quieres eliminar tu perfil?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Eliminar',
      denyButtonText: `No eliminar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        
        this.userRest.deleteProfile(this.userId).subscribe({
          next: (res:any)=>{
            Swal.fire({
              icon: 'success',
              title: res.message,
              showConfirmButton:false,
              timer: 1300,
            });
            localStorage.clear();
            this.router.navigateByUrl('/home');
    
            
          },
          error: (err)=>{
            Swal.fire({
              icon: 'warning',
              title: err.error.message || err.error,
              showConfirmButton:false,
              timer: 1300,
            });
      
          }
        });

      } else if (result.isDenied) {
        Swal.fire('Tu perfil no se ha eliminado')
      }
    })

    
  }


  updateProfile() {
    this.userGetId.password = undefined;
    this.userGetId.role = undefined;
    this.userRest.updateProfile(this.userGetId).subscribe({
      next: (res: any) => {
        Swal.fire({
          icon: 'success',
          title: res.message,
          showConfirmButton:false,
          timer: 1300,
        });
        this.myProfile();

      },
      error: (err) => {
        Swal.fire({
          icon: 'warning',
          title: err.error.message || err.error,
          showConfirmButton:false,
          timer: 1300,
        }); 
      },
    });
  }


  fileChange(fileInput:any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
    console.log(this.filesToUpload);
    
  }

  uploadImage(){
    this.uploadImageRest.fileRequest(this.identity._id, this.filesToUpload, 'image').then(
      (res:any)=>{
      if(!res.error){
        Swal.fire({
          icon: 'success',
          title: res.message,
          showConfirmButton:false,
          timer: 1300,
        });
        localStorage.setItem('identity',JSON.stringify(res.updateUser) )
        
      }else{
        console.log(res);
      }
    })
  }


    ngDoCheck(): void {
    let outService = localStorage.getItem('outService');
    if (this.token != '') {
        this.userImage =  this.userRest.getIdentity().image;
        this.uri = environment.baseUrl + 'user/getImage/'+this.userImage
    }
    
  }
 
}
