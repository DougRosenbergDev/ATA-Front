import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { TravelRoutingModule } from './travel-routing.module';
import { FIndexComponent } from './findex/index.component';
import { FCreateComponent } from './create/create.component';

@NgModule({
  declarations: [
    FIndexComponent,
    FCreateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TravelRoutingModule
  ]
})
export class TravelModule { }