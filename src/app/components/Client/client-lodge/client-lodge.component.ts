import { Component, OnInit } from '@angular/core';
import { LodgeRestService } from 'src/app/services/lodgeRest/lodge-rest.service';
import { CategoryRestService } from 'src/app/services/categoryRest/category-rest.service';
import { DepartmentRestService } from 'src/app/services/departmentRest/department-rest.service';
@Component({
  selector: 'app-client-lodge',
  templateUrl: './client-lodge.component.html',
  styleUrls: ['./client-lodge.component.css']
})
export class ClientLodgeComponent implements OnInit {
lodges: any
categories: any
departments: any
searchLodge:any;

  constructor(
    private lodgeRest: LodgeRestService,
    private categoryRest: CategoryRestService,
    private departmentRest: DepartmentRestService
  ) { }

  ngOnInit(): void {
    this.getLodgesClient();
    this.getCategories();
    this.getDepartments();
  }

  getLodgesClient(){
    this.lodgeRest.getLodgesClient().subscribe({
      next: (res:any)=>{
        
        this.lodges = res.lodges;
      },
      error: (err)=>{
        console.log(err.error.message);
      }
    });
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

}
