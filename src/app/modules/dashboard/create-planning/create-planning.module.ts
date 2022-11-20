import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatePlanningRoutingModule } from './create-planning-routing.module';
import { CreateComponent } from './create/create.component';


@NgModule({
  declarations: [
    CreateComponent
  ],
  imports: [
    CommonModule,
    CreatePlanningRoutingModule,
  ]
})
export class CreatePlanningModule { }
