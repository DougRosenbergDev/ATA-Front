import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { PersonRoutingModule } from './person-routing.module';
import { PIndexComponent } from './pindex/index.component';
import { CreateComponent } from './create/create.component';

@NgModule({
  declarations: [
    PIndexComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PersonRoutingModule
  ]
})
export class PersonModule { }