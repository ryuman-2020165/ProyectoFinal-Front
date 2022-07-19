import { Component, OnInit } from '@angular/core';
import { CategoryRestService } from 'src/app/services/categoryRest/category-rest.service';

@Component({
  selector: 'app-client-category',
  templateUrl: './client-category.component.html',
  styleUrls: ['./client-category.component.css']
})
export class ClientCategoryComponent implements OnInit {
  categories: any

  constructor(
    private categoryRest: CategoryRestService
  ) { }



  ngOnInit(): void {
    this.getCategories()
  }

  getCategories(){
    this.categoryRest.getCategories().subscribe({
      next: (res:any)=>{
        
        
        this.categories = res.findCategory;
      },
      error: (err)=>{
        console.log(err.error.message);
      }
    });
  }


}
