import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserRestService } from '../userRest/user-rest.service';

@Injectable({
  providedIn: 'root'
})
export class TripRestService {
  httpOptions = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': this.userRest.getToken()
  })

  constructor(
    private userRest: UserRestService,
    private http: HttpClient
  ) { }

  testTrips() {
    return this.http.get(environment.baseUrl + 'trip/test', {headers: {'Content-Type': 'application/json',Authorization: this.userRest.getToken(),},});
  }


  addTrip(params: {}) {
    return this.http.post(environment.baseUrl + 'trip/addTrip', params,{headers: {'Content-Type': 'application/json',Authorization: this.userRest.getToken(),
  },
})
  }
  getTrips() {
    return this.http.get(environment.baseUrl + 'trip/getTrips', {headers: {'Content-Type': 'application/json',Authorization: this.userRest.getToken(),},})
  }
  getTrip(id: string) {
    return this.http.get(environment.baseUrl + 'trip/getTrip/' + id, {headers: {'Content-Type': 'application/json',Authorization: this.userRest.getToken(),},})
  }


  updateTrip(params: {}, id: string) {
    return this.http.put(environment.baseUrl + 'trip/updateTrip/' + id, params, {headers: {'Content-Type': 'application/json',Authorization: this.userRest.getToken(),},})
  }

  deleteTrip(id: string) {
    return this.http.delete(environment.baseUrl + 'trip/deleteTrip/' + id, {headers: {'Content-Type': 'application/json',Authorization: this.userRest.getToken(),},})
  }

  getTripsClient(){
    return this.http.get(environment.baseUrl+'trip/getTripsClient',{headers: {'Content-Type': 'application/json',Authorization: this.userRest.getToken(),},})
  }
}
