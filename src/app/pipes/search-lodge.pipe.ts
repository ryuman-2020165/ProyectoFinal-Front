import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchLodge'
})
export class SeachLodgePipe implements PipeTransform {

  transform(lodges:any,search:any){
    if(search==undefined){
      return lodges;
    }else{
      return lodges.filter( (lodges:any)=>{
        return lodges.name.toLowerCase().includes(search.toLowerCase())
      })

    }
    
  }

}
