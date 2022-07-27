import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserRestService } from '../userRest/user-rest.service';


@Injectable({
  providedIn: 'root'
})
export class DestinyRestService {
  httpOptions = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': this.userRest.getToken()
  })

  constructor(
    private userRest: UserRestService,
    private http: HttpClient
  ) { }


  addDestiny(params: {}, idTrip: string, idLodge: string) {
    return this.http.post(environment.baseUrl + 'destiny/addDestiny/'+idTrip + '/'+ idLodge, params, {headers: {'Content-Type': 'application/json',Authorization: this.userRest.getToken(),},})
  }
  getDestinysClients(){
    return this.http.get(environment.baseUrl+'destiny/getDestinysClients',{headers: {'Content-Type': 'application/json',Authorization: this.userRest.getToken(),},})
  }

  getDestinyClient(id: string){
    return this.http.get(environment.baseUrl+'destiny/getDestinyClient/'+ id,{headers: {'Content-Type': 'application/json',Authorization: this.userRest.getToken(),},})
  }

  updateDestiny(params: {}, id: string) {
    return this.http.put(environment.baseUrl + 'destiny/updateDestiny/' + id, params, {headers: {'Content-Type': 'application/json',Authorization: this.userRest.getToken(),},})
  }

  deleteDestiny(id: string) {
    return this.http.delete(environment.baseUrl + 'destiny/deleteDestiny/' + id, {headers: {'Content-Type': 'application/json',Authorization: this.userRest.getToken(),},})
  }

  updateDestinyAdmin(params: {}, id: string) {
    return this.http.put(environment.baseUrl + 'destiny/updateDestinyAdmin/' + id, params, {headers: {'Content-Type': 'application/json',Authorization: this.userRest.getToken(),},})
  }

  deleteDestinyAdmin(id: string) {
    return this.http.delete(environment.baseUrl + 'destiny/deleteDestinyAdmin/' + id,{headers: {'Content-Type': 'application/json',Authorization: this.userRest.getToken(),},})
  }

  getDestinysAdmin(){
    return this.http.get(environment.baseUrl+'destiny/getDestinysAdmin',{headers: {'Content-Type': 'application/json',Authorization: this.userRest.getToken(),},})
  }

  getDestinyAdmin(id: string){
    return this.http.get(environment.baseUrl+'destiny/getDestinyAdmin/'+ id,{headers: {'Content-Type': 'application/json',Authorization: this.userRest.getToken(),},})
  }




}
