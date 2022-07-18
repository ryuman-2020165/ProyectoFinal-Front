import { Component, OnInit } from '@angular/core';
import { DepartmentModel } from 'src/app/models/department.model';
import { DepartmentRestService } from 'src/app/services/departmentRest/department-rest.service'; 

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  departments: any
  department: DepartmentModel
  departmentGetId: any
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
        console.log(res);
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
        alert(res.message)
        this.getDepartments()
        saveDepartmentForm.reset();
      },
      error: (err)=>{
        alert(err.error.message || err.error)
      }
    })
  }

  updateDepartment(){
    this.departmentRest.updateDepartment(this.departmentGetId,this.departmentGetId._id).subscribe({
      next: (res:any)=>{
        console.log(this.departmentGetId);
        
        this.getDepartments()
      },
      error: (err)=>{
        alert(err.error.message || err.error)
  
      }
    })
  }

  getDepartment(id:string){
    this.departmentRest.getDepartment(id).subscribe({
      next: (res:any)=>{
        
        console.log(res);
        this.departmentGetId = res.findDepartment;
        
      },
      error: (err)=>{
        console.log(err.error.message);
      }
  })
}

deleteDepartment(id:string){
  this.departmentRest.deleteDepartment(id).subscribe({
    next: (res:any)=>{
      alert(res.message)
      this.getDepartments()
    },
    error: (err)=>{
      alert(err.error.message || err.error)

    }
  })
}
}

