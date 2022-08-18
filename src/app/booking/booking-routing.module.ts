import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { BindexComponent } from './bindex/bindex.component';
import { BCreateComponent } from './create/create.component';

const routes: Routes = [
  { path: 'Bookings', redirectTo: 'Bookings/index', pathMatch: 'full' },
  { path: 'Bookings/index', component: BindexComponent },
  { path: 'Bookings/create', component: BCreateComponent },
  // { path: 'Bookings/:id', component: BindexComponent },
  // { path: 'Bookings/edit', component: BindexComponent },
]

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
