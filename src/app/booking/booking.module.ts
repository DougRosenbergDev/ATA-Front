import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BindexComponent } from './bindex/bindex.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BookingRoutingModule } from './booking-routing.module';

@NgModule({
  declarations: [
    BindexComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BookingRoutingModule
  ]
})
export class BookingModule { }
