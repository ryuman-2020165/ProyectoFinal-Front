import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserRestService } from '../userRest/user-rest.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryRestService {
  httpOptions = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': this.userRest.getToken()
  })


  constructor(
    private userRest: UserRestService,
    private http: HttpClient
  ) { }

  //Funciones para administrador

  testCategories(){
    return this.http.get(environment.baseUrl+'category/test', {headers: this.httpOptions})
  }
  addCategory(params:{}){
    return this.http.post(environment.baseUrl+'category/addCategory', params,{headers: this.httpOptions})
  }
  getCategories(){
    return this.http.get(environment.baseUrl+'category/getCategorys',{headers: this.httpOptions})
  }
  getCategory(id:string){
    return this.http.get(environment.baseUrl+'category/getCategory/'+id,{headers: this.httpOptions})
  }
  updateCategory(params:{}, id:string){
    return this.http.put(environment.baseUrl+'category/updateCategory/'+id,params,{headers: this.httpOptions})
  }
  deleteCategory(id:string){
    return this.http.delete(environment.baseUrl+'category/deleteCategory/'+id,{headers: this.httpOptions})
  }


}
