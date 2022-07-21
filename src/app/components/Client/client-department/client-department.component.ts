import { Component, OnInit } from '@angular/core';
import { DepartmentRestService } from 'src/app/services/departmentRest/department-rest.service';

@Component({
  selector: 'app-client-department',
  templateUrl: './client-department.component.html',
  styleUrls: ['./client-department.component.css']
})
export class ClientDepartmentComponent implements OnInit {
  departments: any
  searchDepartment:string='';

  constructor(
    private departmentRest: DepartmentRestService
  ) { }

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

}
