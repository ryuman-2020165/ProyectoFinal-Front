import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchDestiny'
})
export class SearchDestinyPipe implements PipeTransform {

  transform(destinatios:any,search:any){
    if(search==undefined){
      return destinatios;
    }else{
      return destinatios.filter( (destinatios:any)=>{
        return destinatios.name.toLowerCase().includes(search.toLowerCase())
      })

    }
    
  }

}
