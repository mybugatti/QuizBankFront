import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniversityComponent } from './university.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    UniversityComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:"",component:UniversityComponent
      }
    ])
  ]
})
export class UniversityModule { }
