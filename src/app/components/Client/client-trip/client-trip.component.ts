import { Component, OnInit } from '@angular/core';
import { TripRestService } from 'src/app/services/tripRest/trip-rest.service';

@Component({
  selector: 'app-client-trip',
  templateUrl: './client-trip.component.html',
  styleUrls: ['./client-trip.component.css']
})
export class ClientTripComponent implements OnInit {
  trips: any
  searchTrip:string='';

  constructor(
    private tripRest: TripRestService
  ) { }

  ngOnInit(): void {
    this.getTripsClient()
  }

  getTripsClient(){
    this.tripRest.getTripsClient().subscribe({
      next: (res:any)=>{
        
        this.trips = res.findTrips;
      },
      error: (err)=>{
        console.log(err.error.message);
      }
    });
  }
}