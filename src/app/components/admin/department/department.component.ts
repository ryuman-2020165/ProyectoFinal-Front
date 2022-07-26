import { Component, OnInit } from '@angular/core';
import { DepartmentModel } from 'src/app/models/department.model';
import { DepartmentRestService } from 'src/app/services/departmentRest/department-rest.service'; 
import Swal from 'sweetalert2';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  departments: any
  department: DepartmentModel
  departmentGetId: any
  searchDepartmets:any;
  constructor(
    private departmentRest: DepartmentRestService
  ) { 
    this.department = new DepartmentModel('','')
  }

  ngOnInit(): void {
    this.getDepartments()
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

  saveDepartment(saveDepartmentForm: any){
    this.departmentRest.saveDepartment(this.department).subscribe({
      next: (res:any)=>{
        Swal.fire({
          icon: 'success',
          title: res.message,
          showConfirmButton:false,
          timer: 1300,
        });
        this.getDepartments()
        saveDepartmentForm.reset();
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

  updateDepartment(){
    this.departmentRest.updateDepartment(this.departmentGetId,this.departmentGetId._id).subscribe({
      next: (res:any)=>{
        Swal.fire({
          icon: 'success',
          title: res.message,
          showConfirmButton:false,
          timer: 1300,
        });
        
        this.getDepartments()
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

  getDepartment(id:string){
    this.departmentRest.getDepartment(id).subscribe({
      next: (res:any)=>{
        
        
        this.departmentGetId = res.findDepartment;
        
      },
      error: (err)=>{
        console.log(err.error.message);
      }
  })
}

deleteDepartment(id:string){
  Swal.fire({
    title: '¿Quieres eliminar el departamento',
    showDenyButton: true,
    showCancelButton: false,
    confirmButtonText: 'Eliminar',
    denyButtonText: `No eliminar`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      this.departmentRest.deleteDepartment(id).subscribe({
        next: (res:any)=>{
          Swal.fire({
            icon: 'success',
            title: res.message,
            showConfirmButton:false,
            timer: 1300,
          });
          this.getDepartments()
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
      Swal.fire('No se ha eliminado el departamento')
    }
  })

}
}

