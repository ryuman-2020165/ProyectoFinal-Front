import { Component, OnInit } from '@angular/core';
import { LodgeModel } from 'src/app/models/lodge.model';
import { LodgeRestService } from 'src/app/services/lodgeRest/lodge-rest.service';
import { CategoryRestService } from 'src/app/services/categoryRest/category-rest.service';
import { DepartmentRestService } from 'src/app/services/departmentRest/department-rest.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lodge',
  templateUrl: './lodge.component.html',
  styleUrls: ['./lodge.component.css']
})
  export class LodgeComponent implements OnInit {
    categories: any
    departments: any
    lodges: any
    lodge: LodgeModel
    lodgeGetId: any
    searchLodge:any;
    constructor(
      private lodgeRest: LodgeRestService,
      private categoryRest: CategoryRestService,
      private departmentRest: DepartmentRestService
    ) { 
      this.lodge = new LodgeModel('','',0,'','','','','');
    }
  
    ngOnInit(): void {
      this.getLodges();
      this.getCategories();
      this.getDepartments();
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

    getDepartments(){
      this.departmentRest.getDepartments().subscribe({
        next: (res:any)=>{
          this.departments = res.findDepartment;
        },
        error: (err)=>{
          console.log(err.error.message);
        }
      });
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
  
    addLodge(addLodgeForm: any){
      this.lodgeRest.addLodge(this.lodge, this.lodge.department, this.lodge.category).subscribe({
        next: (res:any)=>{
          Swal.fire({
            icon: 'success',
            title: res.message,
            showConfirmButton:false,
            timer: 1300,
          });
          this.getLodges();
          this.getCategories();
          this.getDepartments();
          addLodgeForm.reset();
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
  
    updateLodge(){
      this.lodgeRest.updateLodge(this.lodgeGetId,this.lodgeGetId._id).subscribe({
        next: (res:any)=>{
          Swal.fire({
            icon: 'success',
            title: res.message,
            showConfirmButton:false,
            timer: 1300,
          });
          this.getLodges();
          this.getCategories();
          this.getDepartments();
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
  
    getLodge(id:string){
      this.lodgeRest.getLodge(id).subscribe({
        next: (res:any)=>{
          
          
          this.lodgeGetId = res.lodge;
          
        },
        error: (err)=>{
          console.log(err.error.message);
        }
    })
  }
  
  deleteLodge(id:string){
    
    Swal.fire({
      title: '¿Quieres eliminar el hospedaje?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Eliminar',
      denyButtonText: `No eliminar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {

        this.lodgeRest.deleteLodge(id).subscribe({
          next: (res:any)=>{
            Swal.fire({
              icon: 'success',
              title: res.message,
              showConfirmButton:false,
              timer: 1300,
            });
            this.getLodges()
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
        Swal.fire('No se ha eliminado el hospedaje')
      }
    })




  }

}
