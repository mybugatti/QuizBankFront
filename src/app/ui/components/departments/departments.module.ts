import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentsComponent } from './departments.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DepartmentsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:"",component:DepartmentsComponent
      }
    ])
  ]
})

export class DepartmentsModule { }
