import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'planning', loadChildren: () => import('../planning/planning.module').then((m) => m.PlanningModule)
  // },
  {
    path: 'login', loadChildren: () => import('../login/login.module').then((m) => m.LoginModule)
  },
  {
    path: 'dashboard', loadChildren: () => import('../dashboard/dashboard.module').then((m) => m.DashboardModule)
  },
  {
    path: '**', redirectTo: 'login', pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule { }
