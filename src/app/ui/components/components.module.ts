import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentsModule } from './departments/departments.module';
import { UniversityModule } from './university/university.module';
import { HomeModule } from './home/home.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DepartmentsModule,
    UniversityModule,
    HomeModule
  ]
})
export class ComponentsModule { }
