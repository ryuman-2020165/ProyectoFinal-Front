import { Component, OnInit } from '@angular/core';
import { TripModel } from 'src/app/models/trip.model';
import { TripRestService } from 'src/app/services/tripRest/trip-rest.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {
  trips: any
  trip: TripModel
  tripGetId: any
  searchTrip: any;
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
        
        Swal.fire({
          icon: 'success',
          title: res.message,
          showConfirmButton:false,
          timer: 1300,
        });
        this.getTrips()
        addTripForm.reset();
      },
      error: (err) => {
        Swal.fire({
          icon: 'warning',
          title: err.error.message || err.error,
          showConfirmButton:false,
          timer: 1300,
        });
      }
    })
  }

  updateTrip() {
    this.tripRest.updateTrip(this.tripGetId, this.tripGetId._id).subscribe({
      next: (res: any) => {
        
        Swal.fire({
          icon: 'success',
          title: res.message,
          showConfirmButton:false,
          timer: 1300,
        });
        this.getTrips()
      },
      error: (err) => {
        Swal.fire({
          icon: 'warning',
          title: err.error.message || err.error,
          showConfirmButton:false,
          timer: 1300,
        });

      }
    })
  }

  getTrip(id: string) {
    this.tripRest.getTrip(id).subscribe({
      next: (res: any) => {

        
        this.tripGetId = res.trip;

      },
      error: (err) => {
        console.log(err.error.message);
      }
    })
  }

  deleteTrip(id: string) {



      Swal.fire({
        title: 'Quieres eliminar el viaje',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: 'Eliminar',
        denyButtonText: `No eliminar`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          
          this.tripRest.deleteTrip(id).subscribe({
            next: (res: any) => {
              Swal.fire({
                icon: 'success',
                title: res.message,
                showConfirmButton:false,
                timer: 1300,
              });
              this.getTrips()
            },
            error: (err) => {
              Swal.fire({
                icon: 'warning',
                title: err.error.message || err.error,
                showConfirmButton:false,
                timer: 1300,
              });
      
            }})
          
        } else if (result.isDenied) {
          Swal.fire('No se ha eliminado el viaje')
        }
      })
      



    
  }
}
