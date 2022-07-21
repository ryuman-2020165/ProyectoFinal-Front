import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserRestService } from './user-rest.service';

@Injectable({
  providedIn: 'root'
})
export class UploadImageService {

  constructor(
    private userRest: UserRestService
  ) { }


  fileRequest(
    userId:string,
    files:Array<File>,
    name:string
  ){
    return new Promise((resolve, reject)=>{
      let formData = new FormData();
      let xhr = new XMLHttpRequest();
      let uri = environment.baseUrl + 'user/uploadImage';
      for(var i = 0; i < files.length; i++){
        formData.append(name, files[i], files[i].name)
      }

      xhr.onreadystatechange= ()=>{
        if (xhr.readyState == 4) {//code 4 in ajax is Done or ok, code 200 HTTP is Ok
          if (xhr.status == 200) {
            resolve(JSON.parse(xhr.response))
          }else {
            reject(xhr.response)
          }
        } 

      }

      xhr.open('POST', uri , true);
      xhr.setRequestHeader('Authorization',this.userRest.getToken());
      xhr.send(formData)
    })
  }






}
