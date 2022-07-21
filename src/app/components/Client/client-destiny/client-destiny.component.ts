import { Component, OnInit } from '@angular/core';
import { LodgeRestService } from 'src/app/services/lodgeRest/lodge-rest.service';
import { DestinyRestService } from 'src/app/services/destinyRest/destiny-rest.service';
import { TripRestService } from 'src/app/services/tripRest/trip-rest.service';
import { DestinyModel } from 'src/app/models/destiny.model';


@Component({
  selector: 'app-client-destiny',
  templateUrl: './client-destiny.component.html',
  styleUrls: ['./client-destiny.component.css']
})
export class ClientDestinyComponent implements OnInit {
  trips: any
  lodges: any
  destinys: any
  destiny: DestinyModel
  destinyGetId: any


  constructor(
    private lodgeRest : LodgeRestService,
    private tripRest: TripRestService,
    private destinyRest: DestinyRestService
  ) {
    this.destiny = new DestinyModel('','','','');
   }

  ngOnInit(): void {
    this.getDestinysClients();
    this.getTripsClient();
    this.getLodgesClient();
    
  }


  getLodgesClient(){
    this.lodgeRest.getLodgesClient().subscribe({
      next: (res:any)=>{
        this.lodges = res.lodges;
      },
      error: (err)=>{
        console.log(err.error.message);
      }
    });
  }

  getTripsClient() {
    this.tripRest.getTripsClient().subscribe({
      next: (res: any) => {
        
        this.trips = res.findTrips;
      },
      error: (err) => {
        console.log(err.error.message);
      }
    });
  }

  getDestinysClients() {
    this.destinyRest.getDestinysClients().subscribe({
      next: (res: any) => {
        
        this.destinys = res.destinys;
      },
      error: (err) => {
        console.log(err.error.message);
      }
    });
  }


  addDestiny(addDestinyForm: any){
    this.destinyRest.addDestiny(this.destiny, this.destiny.trip, this.destiny.lodge).subscribe({
      next: (res:any)=>{
        alert(res.message)
        this.getLodgesClient();
        this.getTripsClient();
        this.getDestinysClients();
        addDestinyForm.reset();
      },
      error: (err)=>{
        alert(err.error.message || err.error)
      }
    })
  }

  updateDestiny(){
    this.destinyRest.updateDestiny(this.destinyGetId,this.destinyGetId._id).subscribe({
      next: (res:any)=>{
        alert(res.message)
        this.getLodgesClient();
        this.getTripsClient();
        this.getDestinysClients();
      },
      error: (err)=>{
        alert(err.error.message || err.error)
  
      }
    })
  }

  getDestinyClient(id:string){
    this.destinyRest.getDestinyClient(id).subscribe({
      next: (res:any)=>{
        console.log(res);
        
        this.destinyGetId = res.destiny;
        
      },
      error: (err)=>{
        console.log(err.error.message);
      }
  })
}

deleteDestiny(id:string){
  this.destinyRest.deleteDestiny(id).subscribe({
    next: (res:any)=>{
      alert(res.message)
      this.getDestinysClients()
    },
    error: (err)=>{
      alert(err.error.message || err.error)

    }
  })
}
}
