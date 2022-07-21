import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchDepartment'
})
export class SearchDepartmentPipe implements PipeTransform {

  transform(departments:any,search:any){
    if(search==undefined){
      return departments;
    }else{
      return departments.filter( (departments:any)=>{
        return departments.name.toLowerCase().includes(search.toLowerCase())
      })

    }
    
  }

}
