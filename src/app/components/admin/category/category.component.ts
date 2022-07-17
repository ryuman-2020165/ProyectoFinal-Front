import { Component, OnInit } from '@angular/core';
import { CategoryModel } from 'src/app/models/category.model';
import { CategoryRestService } from 'src/app/services/categoryRest/category-rest.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: any
  category: CategoryModel
  categoryGetId: any

  constructor(
    private categoryRest: CategoryRestService
  ) { 
    this.category = new CategoryModel('','')
  }

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

  addCategory(addCategoryForm: any){
    this.categoryRest.addCategory(this.category).subscribe({
      next: (res:any)=>{
        alert(res.message)
        this.getCategories()
        addCategoryForm.reset();
      },
      error: (err)=>{
        alert(err.error.message || err.error)
      }
    })
  }


  updateCategory(){
    this.categoryRest.updateCategory(this.categoryGetId,this.categoryGetId._id).subscribe({
      next: (res:any)=>{
        console.log(res);
        
        this.getCategories()
      },
      error: (err)=>{
        alert(err.error.message || err.error)
 
      }
    })

  }

  getCategory(id:string){
    this.categoryRest.getCategory(id).subscribe({
      next: (res:any)=>{
        
        
        this.categoryGetId = res.findCategory;
        
      },
      error: (err)=>{
        console.log(err.error.message);
      }
  })
}

deleteCategory(id:string){
  this.categoryRest.deleteCategory(id).subscribe({
    next: (res:any)=>{
      alert(res.message)
      this.getCategories()
    },
    error: (err)=>{
      alert(err.error.message || err.error)

    }
  })
}

}
