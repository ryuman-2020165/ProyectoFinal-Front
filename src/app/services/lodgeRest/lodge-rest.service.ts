import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserRestService } from '../userRest/user-rest.service';

@Injectable({
  providedIn: 'root'
})
export class LodgeRestService {
  httpOptions = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': this.userRest.getToken()
  })

  constructor(
    private userRest: UserRestService,
    private http: HttpClient
  ) { }
 
  testLodges() {
    return this.http.get(environment.baseUrl + 'lodge/test', {headers: {'Content-Type': 'application/json',Authorization: this.userRest.getToken(),},});
  }


  addLodge(params: {}, idDepartment: string, idCategory: string) {
    return this.http.post(environment.baseUrl + 'lodge/addLodge/'+idDepartment + '/'+ idCategory, params, {headers: {'Content-Type': 'application/json',Authorization: this.userRest.getToken(),},})
  }
  getLodges() {
    return this.http.get(environment.baseUrl + 'lodge/getLodges', {headers: {'Content-Type': 'application/json',Authorization: this.userRest.getToken(),},})
  }
  getLodge(id: string) {
    return this.http.get(environment.baseUrl + 'lodge/getLodge/' + id, {headers: {'Content-Type': 'application/json',Authorization: this.userRest.getToken(),},})
  }


  updateLodge(params: {}, id: string) {
    return this.http.put(environment.baseUrl + 'lodge/updateLodge/' + id, params, {headers: {'Content-Type': 'application/json',Authorization: this.userRest.getToken(),},})
  }

  deleteLodge(id: string) {
    return this.http.delete(environment.baseUrl + 'lodge/deleteLodge/' + id, {headers: {'Content-Type': 'application/json',Authorization: this.userRest.getToken(),},})
  }

  getLodgesClient(){
    return this.http.get(environment.baseUrl+'lodge/getLodgesClients',{headers: {'Content-Type': 'application/json',Authorization: this.userRest.getToken(),},})
  }
  
}