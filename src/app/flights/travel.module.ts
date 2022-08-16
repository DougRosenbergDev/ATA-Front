import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { TravelRoutingModule } from './travel-routing.module';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';

@NgModule({
  declarations: [
    IndexComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlightRoutingModule
  ]
})
export class TravelModule { }