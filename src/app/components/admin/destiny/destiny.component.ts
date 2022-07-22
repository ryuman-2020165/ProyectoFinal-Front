import { Component, OnInit } from '@angular/core';
import { LodgeRestService } from 'src/app/services/lodgeRest/lodge-rest.service';
import { DestinyRestService } from 'src/app/services/destinyRest/destiny-rest.service';
import { TripRestService } from 'src/app/services/tripRest/trip-rest.service';
import { DestinyModel } from 'src/app/models/destiny.model';

@Component({
  selector: 'app-destiny',
  templateUrl: './destiny.component.html',
  styleUrls: ['./destiny.component.css']
})
export class DestinyComponent implements OnInit {
  trips: any
  lodges: any
  destinys: any
  destiny: DestinyModel
  destinyGetId: any
  searchDestiny: any;

  constructor(
    private lodgeRest : LodgeRestService,
    private tripRest: TripRestService,
    private destinyRest: DestinyRestService
  ) { 
    this.destiny = new DestinyModel('','','','');
  }

  ngOnInit(): void {
    this.getDestinys();
    this.getTrips();
    this.getLodges();
  }


  getLodges(){
    this.lodgeRest.getLodges().subscribe({
      next: (res:any)=>{
        this.lodges = res.lodges;
      },
      error: (err)=>{
        console.log(err.error.message);
      }
    });
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

  getDestinys() {
    this.destinyRest.getDestinysAdmin().subscribe({
      next: (res: any) => {
        
        this.destinys = res.destinys;
 
      },
      error: (err) => {
        console.log(err.error.message);
      }
    });
  }


  updateDestiny(){
    this.destinyRest.updateDestinyAdmin(this.destinyGetId,this.destinyGetId._id).subscribe({
      next: (res:any)=>{
        alert(res.message)
        this.getLodges();
        this.getTrips();
        this.getDestinys();
      },
      error: (err)=>{
        alert(err.error.message || err.error)
  
      }
    })
  }

  getDestiny(id:string){
    this.destinyRest.getDestinyAdmin(id).subscribe({
      next: (res:any)=>{
        
        this.destinyGetId = res.destiny;
        console.log(res);
      },
      error: (err)=>{
        console.log(err.error.message);
      }
  })
}

deleteDestiny(id:string){
  this.destinyRest.deleteDestinyAdmin(id).subscribe({
    next: (res:any)=>{
      alert(res.message)

      this.getDestinys();
    },
    error: (err)=>{
      alert(err.error.message || err.error)

    }
  })
}

}
