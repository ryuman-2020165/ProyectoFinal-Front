import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchTrip'
})
export class SearchTripPipe implements PipeTransform {

  transform(trips:any,search:any){
    if(search==undefined){
      return trips;
    }else{
      return trips.filter( (trips:any)=>{
        return trips.name.toLowerCase().includes(search.toLowerCase())
      })

    }
    
  }

}
