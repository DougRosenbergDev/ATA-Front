import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { PersonRoutingModule } from './person-routing.module';
import { PIndexComponent } from './pindex/index.component';
import { PCreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';

@NgModule({
  declarations: [
    PIndexComponent,
    PCreateComponent,
    EditComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PersonRoutingModule
  ]
})
export class PersonModule { }