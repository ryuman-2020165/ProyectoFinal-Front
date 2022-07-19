import { Component, OnInit } from '@angular/core';
import { TripModel } from 'src/app/models/trip.model';
import { TripRestService } from 'src/app/services/tripRest/trip-rest.service';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {
  trips: any
  trip: TripModel
  tripGetId: any
  constructor(
    private tripRest: TripRestService
  ) {
    this.trip = new TripModel('', '', '')
  }

  ngOnInit(): void {
    this.getTrips()
  }

  getTrips() {
    this.tripRest.getTrips().subscribe({
      next: (res: any) => {
        
        this.trips = res.findTrips;
      },
      error: (err) => {
        console.log(err.error.message);
      }
    });
  }

  addTrip(addTripForm: any) {
    this.tripRest.addTrip(this.trip).subscribe({
      next: (res: any) => {
        alert(res.message)
        this.getTrips()
        addTripForm.reset();
      },
      error: (err) => {
        alert(err.error.message || err.error)
      }
    })
  }

  updateTrip() {
    this.tripRest.updateTrip(this.tripGetId, this.tripGetId._id).subscribe({
      next: (res: any) => {
        

        this.getTrips()
      },
      error: (err) => {
        alert(err.error.message || err.error)

      }
    })
  }

  getTrip(id: string) {
    this.tripRest.getTrip(id).subscribe({
      next: (res: any) => {

        
        this.tripGetId = res.findTrip;

      },
      error: (err) => {
        console.log(err.error.message);
      }
    })
  }

  deleteTrip(id: string) {
    this.tripRest.deleteTrip(id).subscribe({
      next: (res: any) => {
        alert(res.message)
        this.getTrips()
      },
      error: (err) => {
        alert(err.error.message || err.error)

      }
    })
  }
}
