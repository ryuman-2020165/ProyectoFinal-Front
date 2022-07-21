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
    return this.http.get(environment.baseUrl + 'lodge/test', { headers: this.httpOptions });
  }


  addLodge(params: {}, idDepartment: string, idCategory: string) {
    return this.http.post(environment.baseUrl + 'lodge/addLodge/'+idDepartment + '/'+ idCategory, params, { headers: this.httpOptions })
  }
  getLodges() {
    return this.http.get(environment.baseUrl + 'lodge/getLodges', { headers: this.httpOptions })
  }
  getLodge(id: string) {
    return this.http.get(environment.baseUrl + 'lodge/getLodge/' + id, { headers: this.httpOptions })
  }


  updateLodge(params: {}, id: string) {
    return this.http.put(environment.baseUrl + 'lodge/updateLodge/' + id, params, { headers: this.httpOptions })
  }

  deleteLodge(id: string) {
    return this.http.delete(environment.baseUrl + 'lodge/deleteLodge/' + id, { headers: this.httpOptions })
  }

  getLodgesClient(){
    return this.http.get(environment.baseUrl+'lodge/getLodgesClients',{headers: this.httpOptions})
  }
  
}