import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardModule } from './dashboard/dashboard.module';
import { DepartmentsModule } from './departments/departments.module';
import { UniversityModule } from './university/university.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DashboardModule,
    DepartmentsModule,
    UniversityModule
  ]
})
export class ComponentsModule { }
