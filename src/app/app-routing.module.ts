import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './admin/layout/layout.component';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { HomeComponent } from './ui/components/home/home.component';

const routes: Routes = [//ikinci aşamada kendi modülünde oluşturulan rotaların ana modülde oluşturulduğu alan
  {
    path: "admin",
    component: LayoutComponent,
    children: [
      { path: "", component: DashboardComponent },
      { path: "university", loadChildren: () => import("./admin/components/university/university.module").then(module => module.UniversityModule) },
      { path: "departments", loadChildren: () => import("./admin/components/departments/departments.module").then(module => module.DepartmentsModule) }
    ]
  },
  { path: "", component: HomeComponent },
  { path: "university", loadChildren: () => import("./ui/components/university/university.module").then(module => module.UniversityModule) },
  { path: "departments", loadChildren: () => import("./ui/components/departments/departments.module").then(module => module.DepartmentsModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
