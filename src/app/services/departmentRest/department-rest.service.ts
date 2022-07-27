import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserRestService } from '../userRest/user-rest.service';

@Injectable({
  providedIn: 'root'
})
export class DepartmentRestService {
  httpOptions = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': this.userRest.getToken()
  })

  constructor(
    private userRest: UserRestService,
    private http: HttpClient
  ) { }

  testDepartments(){
    return this.http.get(environment.baseUrl +'department/test', {headers: {'Content-Type': 'application/json',Authorization: this.userRest.getToken(),},});
  }

  
  saveDepartment(params:{}){
    return this.http.post(environment.baseUrl+'department/saveDepartment', params,{headers: {'Content-Type': 'application/json',Authorization: this.userRest.getToken(),},})
  }
  getDepartments(){
    return this.http.get(environment.baseUrl+'department/getDepartments',{headers: {'Content-Type': 'application/json',Authorization: this.userRest.getToken(),},})
  }
  getDepartment(id:string){
    return this.http.get(environment.baseUrl+'department/getDepartment/'+id,{headers: {'Content-Type': 'application/json',Authorization: this.userRest.getToken(),},})
  }


  updateDepartment(params:{}, id:string){
    return this.http.put(environment.baseUrl+'department/updateDepartment/'+id,params,{headers: {'Content-Type': 'application/json',Authorization: this.userRest.getToken(),},})
  }

  deleteDepartment(id:string){
    return this.http.delete(environment.baseUrl+'department/deleteDepartment/'+id,{headers: {'Content-Type': 'application/json',Authorization: this.userRest.getToken(),},})
  }
}
