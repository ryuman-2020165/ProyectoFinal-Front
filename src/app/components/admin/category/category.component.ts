import { Component, OnInit } from '@angular/core';
import { CategoryModel } from 'src/app/models/category.model';
import { CategoryRestService } from 'src/app/services/categoryRest/category-rest.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: any
  category: CategoryModel
  categoryGetId: any
  searchCategories: any;

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
        Swal.fire({
          icon: 'success',
          title: res.message,
          showConfirmButton:false,
          timer: 1300,
        });
        this.getCategories()
        addCategoryForm.reset();
      },
      error: (err)=>{
        Swal.fire({
          icon: 'warning',
          title: err.error.message || err.error,
          showConfirmButton:false,
          timer: 1300,
        });
        
      }
    })
  }


  updateCategory(){
    this.categoryRest.updateCategory(this.categoryGetId,this.categoryGetId._id).subscribe({
      next: (res:any)=>{
        Swal.fire({
          icon: 'success',
          title: res.message,
          showConfirmButton:false,
          timer: 1300,
        });
        
        this.getCategories()
      },
      error: (err)=>{
        Swal.fire({
          icon: 'warning',
          title: err.error.message || err.error,
          showConfirmButton:false,
          timer: 1300,
        });
 
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
  

      Swal.fire({
        title: '¿Quieres eliminar la categoria',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: 'Eliminar',
        denyButtonText: `No eliminar`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          

          this.categoryRest.deleteCategory(id).subscribe({
            next: (res:any)=>{
              this.getCategories()
              Swal.fire({
                icon: 'success',
                title: res.message,
                showConfirmButton:false,
                timer: 1300,
              });
            },
            error: (err)=>{
              Swal.fire({
                icon: 'warning',
                title: err.error.message || err.error,
                showConfirmButton:false,
                timer: 1300,
              });
        
            }
          })

          

        } else if (result.isDenied) {
          Swal.fire('No se ha eliminado la categoria')
        }
      })

      


    
}

}
