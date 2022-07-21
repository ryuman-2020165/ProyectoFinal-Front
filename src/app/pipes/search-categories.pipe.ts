import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchCategories'
})
export class SearchCategoriesPipe implements PipeTransform {

  transform(categories:any,search:any){
    if(search==undefined){
      return categories;
    }else{
      return categories.filter( (categories:any)=>{
        return categories.name.toLowerCase().includes(search.toLowerCase())
      })

    }
    
  }

}
