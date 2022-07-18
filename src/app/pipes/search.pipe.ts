import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(users:any,search:any){
    if(search==undefined){
      return users;
    }else{
      return users.filter( (users:any)=>{
        return users.name.toLowerCase().includes(search.toLowerCase())
      })

    }
    
  }

}
